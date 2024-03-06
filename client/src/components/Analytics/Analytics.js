import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import LineGraph from "./LineGraph";

const Analytics = () => {
  const { shortid } = useParams();

  const [clicksPerTime, setClicksPerTime] = useState({});
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState("5min");
  const [totalClicks, setTotalClicks] = useState(0);

  useEffect(() => {
    const fetchVisitedHistory = async () => {
      try {
        const response = await axios.get(
          `https://url-shortner-backend-teal.vercel.app/analytics/${shortid}`
        );
        const visitedHistory = response.data;
        setTotalClicks(visitedHistory.length)
        const newClicksPerTime = {};

        // Calculate clicks per time interval
        visitedHistory.forEach(({ timestamps }) => {
          const date = new Date(timestamps);
          let time;

          // Determine time interval (hour or 5 minutes)
          if (activeTab === "hour") {
            time = `${date.getHours()}:00`;
          } else if (activeTab === "5min") {
            const min = Math.floor(date.getMinutes() / 5) * 5;
            time = `${date.getHours()}:${min < 10 ? "0" : ""}${min}`;
          } else {
            time = date.toISOString().split("T")[0];
          }

          if (!newClicksPerTime[time]) {
            newClicksPerTime[time] = 1;
          } else {
            newClicksPerTime[time]++;
          }
        });

        const newLabels = Object.keys(newClicksPerTime);
        const newData = Object.values(newClicksPerTime);

        setClicksPerTime(newClicksPerTime);
        setLabels(newLabels);
        setData(newData);
      } catch (err) {
        console.log("Error: ", err);
      }
    };

    fetchVisitedHistory();
  }, [shortid, activeTab]);

  return (
    <div className="bg-black text-white pb-2 min-h-screen">
      <Navbar />

      <div className="text-4xl ml-4 flex justify-center">ANALYTICS</div>

      <div className=" justify-around my-4 flex flex-col items-center gap-5 sm:flex-row">
        
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly gap-5 items-center">
        <div className="bg-blue-800 justify-center flex-col text-center p-3 text-2xl w-56 border-2 rounded">
          <div>Total Clicks</div>
          <div>{totalClicks}</div>
        </div>
        <div className="sm:w-2/5 w-5/6">


          <div className="flex">
            <button
              className={`${activeTab === "5min" ? "border-b-2 border-white" : ""
                } px-4 mx-2`}
              onClick={() => setActiveTab("5min")}
            >
              5 min
            </button>
            <button
              className={`${activeTab === "hour" ? "border-b-2 border-white" : ""
                } px-4 mx-2`}
              onClick={() => setActiveTab("hour")}
            >
              1 hour
            </button>
            <button
              className={`${activeTab === "day" ? "border-b-2 border-white" : ""
                } px-4 mx-2`}
              onClick={() => setActiveTab("day")}
            >
              1 day
            </button>

            {/* Add more buttons for other time intervals */}
          </div>
          <div>
            <LineGraph
              data={{
                labels: labels,
                datasets: [
                  {
                    label: `Clicks per ${activeTab}`,
                    data: data,
                    fill: false,
                    borderColor: "rgba(75,192,192,1)",
                    tension: 0.1,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
