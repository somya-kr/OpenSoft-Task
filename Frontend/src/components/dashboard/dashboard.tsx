"use client";
import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import "../../styles/dashboard.scss";
import Textbox from "../textbox/textbox";

const Dashboard = () => {
  const [mockData, setMockData] = useState([
    {
      originalLink: "youtube.com/hello-test",
      shortenedLink: "zipurl/main",
      status: "Live",
      copied: false,
    },
    {
      originalLink: "anime-rocks/bocchi-the-rock",
      shortenedLink: "zipurl/anime",
      status: "Draft",
      copied: false,
    },
    {
      originalLink: "academics/10-cgpa-in-5-days",
      shortenedLink: "zipurl/scam",
      status: "Expired",
      copied: false,
    },
  ]);

  const handleCopyClick = (shortenedLink, index) => {
    navigator.clipboard
      .writeText(shortenedLink)
      .then(() => {
        setMockData((prev) =>
          prev.map((item, i) =>
            i === index ? { ...item, copied: true } : item
          )
        );
        setTimeout(
          () =>
            setMockData((prev) =>
              prev.map((item, i) =>
                i === index ? { ...item, copied: false } : item
              )
            ),
          2000
        );
      })
      .catch((error) => console.log("Error copying to clipboard", error));
  };

  const handleShorten = (originalLink) => {
    const newLink = {
      originalLink,
      shortenedLink: `zipurl/${generateRandomName()}`,
      status: "Live",
      copied: false,
    };

    setMockData((prev) => [...prev, newLink]);
  };

  const generateRandomName = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  return (
    <div className="dashboard-wrapper">
      <Textbox onShorten={handleShorten} />
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th className="expand">Original Link</th>
            <th>Shortened Link</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.originalLink}</td>
              <td>{item.shortenedLink}</td>
              <td>
                <span className={`label label-${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <span className="actions">
                  <BsFillTrashFill className="delete-btn" />
                  {item.copied ? (
                    <LuCopyCheck className="copy-btn" />
                  ) : (
                    <LuCopy
                      className={`copy-btn ${item.copied ? "copied" : ""}`}
                      onClick={() => handleCopyClick(item.shortenedLink, index)}
                    />
                  )}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
