import { Post } from "@/interfaces/post";
import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { slug } from "github-slugger";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
                    .map((slug) => getPostBySlug(slug))
                    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getAllTags() {
    const tags: Record<string, number> = {};
    const posts = getAllPosts();
    posts.forEach(post => {
        post.tags?.forEach(tag => {
            tags[tag] = (tags[tag] ?? 0) + 1;
        })
    })
    return tags;
}

export function sortTags(tags: Record<string, number>) {
    return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostByTag(tag: string) {
    const posts = getAllPosts();
    return posts.filter(post => {
        if(!post.tags) return false;
        
        const slugifiedTags = post.tags.map(tag => slug(tag))
        return slugifiedTags.includes(tag);
    })
}