import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE =
  "http://localhost:8080/https://superheroapi.com/api/55f51348797eae3f8dd7f54b523b814a/search/";

const Search = ({ placeholder, onSuggestionSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE}${searchTerm}`);
        if (response.data && response.data.results) {
          setSuggestions(response.data.results.slice(0, 3));
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceFetch = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceFetch);
  }, [searchTerm]);

  return (
    <div className="max-w-md w-full bg-white shadow-md rounded p-4">
      <h1 className="text-xl font-bold mb-4 text-center">Search</h1>

      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="mt-2 min-h-[80px]">
        {loading && <p className="text-gray-500 text-center">Loading...</p>}
        {!loading && suggestions.length > 0 && (
          <ul className="bg-gray-100 border rounded divide-y divide-gray-300">
            {suggestions.map((item) => (
              <li
                key={item.id}
                className="p-2 hover:bg-gray-200 flex justify-between items-center"
              >
                {item.name}
                <button
                  onClick={() => onSuggestionSelect(item)}
                  className="ml-2 px-2 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Select
                </button>
              </li>
            ))}
          </ul>
        )}
        {!loading && searchTerm && suggestions.length === 0 && (
          <p className="text-gray-500 text-center">No results found</p>
        )}
      </div>
    </div>
  );
};
