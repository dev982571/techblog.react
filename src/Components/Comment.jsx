import { useState } from "react";

function Comment() {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    function addComment(e) {
        e.preventDefault();

        if (comment.trim() === "") {
            return;
        }

        setComments([...comments, comment]);
        setComment("");
    }

    return (
        <div>
            <h3>Comments</h3>

            <form onSubmit={addComment}>
                <input
                    type="text"
                    placeholder="Write a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                <button type="submit">Post</button>
            </form>

            {comments.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
}

export default Comment;