import type { Post } from "../types/posts";
import { PostCard } from "./PostCard";

interface PostListProps {
    posts: Post[];
}

export function PostList({ posts }: PostListProps) {
    return (
        <section className="postList">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </section>
    );
}