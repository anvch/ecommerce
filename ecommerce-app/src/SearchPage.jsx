import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchProduct from "./SearchProduct";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (searchQuery) {
      fetch(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(
          searchQuery
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          // Check if the data is an array before setting state
          if (Array.isArray(data.products)) {
            setSearchResults(data.products);
          } else {
            console.error("Search results data is not an array:", data);
          }
        })
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  };

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <br></br>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <SearchProduct key={result.id} product={result}></SearchProduct>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;

// <li key={result.id}>{result.title}</li>
