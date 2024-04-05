import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      // Redirect to search page with filtered results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
