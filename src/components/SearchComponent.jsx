import React, { useState, useEffect, useRef } from "react";
import data from "../data/data.json";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value === "") {
      setResults([]);
      return;
    }

    const filteredResults = data.codes.filter((item) =>
      item.code.includes(value)
    );
    setResults(filteredResults);
  };

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={query}
          onChange={handleSearch}
          ref={inputRef}
          placeholder="Write code number"
        />
      </div>

      <div>
        {results.length > 0
          ? results.map((result, index) => (
              <div key={index}>
                Body Part: {result.bodypart}: {result.name} {result.model}
              </div>
            ))
          : query && <div>No se encontraron resultados.</div>}
      </div>
    </div>
  );
};

export default SearchComponent;
