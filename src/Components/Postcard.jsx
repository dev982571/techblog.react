import Comment from "./Comment";

function PostCard({ post }) {
    return (
        <div className="post-card">
            <div className="post-content">
                {post.urlToImage && (
                    <img
                        src={post.urlToImage}
                        alt={post.title || "Article image"}
                    />
                )}

                <h2>{post.title}</h2>

                <p>
                    {post.description || "No description available."}
                </p>

                <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    Read Article
                </a>
            </div>

            <div className="post-comments">
                <Comment />
            </div>
        </div>
    );
}

export default PostCard;