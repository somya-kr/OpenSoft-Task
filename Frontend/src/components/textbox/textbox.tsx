"use client";
import { FaLink } from "react-icons/fa";
import "../../styles/Textbox.scss";

const Textbox = () => {
  return (
    <div className="center-wrapper">
      <div className="textbox-container">
        <FaLink className="icon" />
        <form>
          <input type="text" placeholder="Enter a link to shorten it" />
          <button type="submit">Shorten URL</button>
        </form>
      </div>
    </div>
  );
};

export default Textbox;
