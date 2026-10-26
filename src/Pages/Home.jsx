import { useState, useEffect } from "react";
import PostCard from "../Components/Postcard";
import Error from "../Components/Error";
import Loading from "../Components/Loading";
import Search from "../Components/Search";
import Footer from "../Components/Footer";

function Home() {
    const [posts, setposts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=technology&apiKey=65b8a6d945f24905bdc07a25bfefbb48")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch articles");
                }

                return res.json();
            })
            .then((data) => {
                if (data.status !== "ok") {
                    throw new Error("Failed to load articles");
                }

                setposts(data.articles || []);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    const filteredPosts = posts.filter((post) =>
        `${post.title || ""} ${post.description || ""}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    return (
        <div>
            <Search onSearch={setSearchTerm} />

            <h1>Latest Blog Posts</h1>

            <div className="posts">
                {filteredPosts.map((post) => (
                    <PostCard key={post.url} post={post} />
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <p>No articles found.</p>
            )}

            <Footer />
        </div>
    );
}

export default Home;