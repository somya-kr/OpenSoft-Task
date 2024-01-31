"use client";
import { useState } from "react";
import { FaLink } from "react-icons/fa";
import "../../styles/Textbox.scss";

const Textbox = ({ onShorten }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onShorten(inputValue);
    setInputValue("");
  };

  return (
    <div className="center-wrapper">
      <div className="textbox-container">
        <FaLink className="icon" />
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter a link to shorten it"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Shorten URL</button>
        </form>
      </div>
    </div>
  );
};

export default Textbox;
