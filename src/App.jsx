import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import Filter from "./components/Filter";
import Results from "./components/Results";
import "./index.css";

const blogPosts = [
  { id: 1, title: "React Basics", category: "React", content: "React is a JavaScript library for building user interfaces." },
  { id: 2, title: "Understanding JavaScript Closures", category: "JavaScript", content: "Closures are functions that refer to variables from their outer scope." },
  { id: 3, title: "CSS Grid vs Flexbox", category: "CSS", content: "CSS Grid and Flexbox are layout systems with different use cases." },
  { id: 4, title: "React State Management", category: "React", content: "Managing state effectively is key in React applications." },
];

function App() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesQuery = post.title.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === "All" || post.category === filter;
    return matchesQuery && matchesFilter;
  });

  return (
    <div className="app-container">
      <h1>Blog Search</h1>
      <SearchBox query={query} setQuery={setQuery} />
      <Filter filter={filter} setFilter={setFilter} />
      <Results posts={filteredPosts} />
    </div>
  );
}

export default App;


