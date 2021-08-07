//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const currentTime = new Date().getHours();
let timeOfDayColor = "";
let timeOfDay = "";

if (currentTime < 12 && currentTime >= 0) {
  timeOfDay = "Morning";
  timeOfDayColor = "red";
} else if (currentTime > 12 && currentTime <= 18) {
  timeOfDay = "Afternoon";
  timeOfDayColor = "green";
} else if (currentTime > 18 && currentTime <= 24) {
  timeOfDay = "Evening";
  timeOfDayColor = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={{ color: timeOfDayColor }}>
      Good {timeOfDay}!
    </h1>
  </div>,
  document.getElementById("root")
);
