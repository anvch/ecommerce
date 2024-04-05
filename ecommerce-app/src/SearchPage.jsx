import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");
  const history = useHistory();

  useEffect(() => {
    if (searchQuery) {
      fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(
          searchQuery
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResults(data);
        })
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    history.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
