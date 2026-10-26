import { useState } from "react";

function Search({ onSearch }) {
    const [search, setSearch] = useState("");

    function handleSearch(e) {
        e.preventDefault();
        onSearch(search.trim());
    }

    return (
        <form className="search-box" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search technology articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">Search</button>
        </form>
    );
}

export default Search;