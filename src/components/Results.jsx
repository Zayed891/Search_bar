import React from "react";

const Results = ({ posts }) => {
  return (
    <div className="results">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="result-item">
            <h2>{post.title}</h2>
            <p><strong>Category:</strong> {post.category}</p>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Results;

