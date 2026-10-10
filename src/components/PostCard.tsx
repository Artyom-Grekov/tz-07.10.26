import type { Post } from "../types/posts";

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <article className="postCard">
            <div className="postTop">
                <span className="tag">{post.category}</span>
                <span className="author">by {post.author}</span>
            </div>

            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </article>
    );
}