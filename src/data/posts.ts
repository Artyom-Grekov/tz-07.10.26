import type { Post } from "../types/posts.ts";

export const posts: Post[] = [
    {
        id: 1,
        title: "JavaScript Basics",
        content: "JavaScript is one of the most popular programming languages for web development.",
        author: "Artem",
        category: "programming"
    },
    {
        id: 2,
        title: "React Components",
        content: "Components help split the interface into small reusable parts.",
        author: "Alex",
        category: "react"
    },
    {
        id: 3,
        title: "TypeScript Benefits",
        content: "TypeScript helps catch errors before running the project.",
        author: "Maria",
        category: "typescript"
    },
    {
        id: 4,
        title: "Express Backend",
        content: "Express is a simple framework for building APIs with Node.js.",
        author: "John",
        category: "backend"
    },
    {
        id: 5,
        title: "Forum API Project",
        content: "This forum project will later connect frontend and backend together.",
        author: "Artem",
        category: "forum"
    }
];