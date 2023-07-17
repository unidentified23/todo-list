import React from "react";
import { useState } from "react";

function SearchBar(props) {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const filterBySearch = (e) => {
    const searchTerm = e.target.value;
    if(searchTerm === "") {
        setSearchResults([])
        return
    }

    const Results = props.listItems.filter((item) =>
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(Results);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."

        onChange={filterBySearch}
      />

      <ul>
        {searchResults.map((task, index) => (
          <li key={index}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
