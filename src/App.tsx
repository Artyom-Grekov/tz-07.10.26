import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { posts } from "./data/posts";
import "./App.css";

function App() {
    return (
        <main className="page">
            <Header />

            <section className="content">
                <div className="sectionTitle">
                    <h2>Latest posts</h2>
                    <p>{posts.length} posts available</p>
                </div>

                <PostList posts={posts} />
            </section>
        </main>
    );
}

export default App;