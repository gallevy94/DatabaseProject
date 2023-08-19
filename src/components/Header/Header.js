import React from "react";
import "./Header.css";

export const Header = ({ setIsAdding, setQFilter, qFilter }) => {
  return (
    <div>
      <h1 className="header">Humanz Project</h1>
      <div className="search-btn">
        <input
          className="input"
          type="text"
          value={qFilter}
          onChange={(e) => setQFilter(e.target.value)}
        />
        <button className="btn" onClick={() => setIsAdding(true)}>
          Add Client
        </button>
      </div>
    </div>
  );
};
