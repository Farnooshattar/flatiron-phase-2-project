import React, { useState } from "react";

function CatSearch({ searchCard }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchTerm.trim() !== "") {
      searchCard(searchTerm);
    }
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <form onSubmit={handleSearchSubmit}>
          <input
            className="prompt"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search Cats"
          />
          <button type="submit">
            <i className="search icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default CatSearch;
