import { Author } from "./author";

export type Post = {
    slug: string;
    title: string;
    summary: string;
    date: string;
    coverImage: string;
    tags: string[];
    featured: boolean;
    author: Author;
    content: string;
}