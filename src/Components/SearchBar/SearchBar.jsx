// SearchBar.js
"use client";

import "./SearchBar.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = debounce((value) => {
    router.push(`/products?search=${value}`);
  }, 2000);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearch(value);
  };

  return (
    <div className="search-controls">
      <label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Type to search..."
        />
      </label>
    </div>
  );
}
