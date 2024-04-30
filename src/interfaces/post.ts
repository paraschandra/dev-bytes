export type Post = {
    slug: string;
    title: string;
    summary: string;
    date: string;
    coverImage: string;
    tags: string[];
    featured: boolean;
    author: string;
    content: string;
}