"use client";

import "./SearchBar.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    router.push(`/products?search=${value}`);
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
