import React from "react";
import "../styles/Recent.css";
import RecentData from "./RecentData";
import im2 from "../image/2.jpg";
import im3 from "../image/17.jpg";
import im4 from "../image/1.jpg";

const Recent = () => {
  return (
    <div className="recent">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination Google Maps.</p>

      <div className="recentcard">
        <RecentData
          image={im2}
          heading="Dark Chocolate >"
       
        />

        <RecentData
          image={im3}
          heading="Candy >"
         
        />

        <RecentData
          image={im4}
          heading="Black Chocolate >"
          
        />
      </div>
    </div>
  );
};

export default Recent;
