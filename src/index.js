//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom"

const date = new Date(2012, 1,1, 1);
const currentTime = date.getHours();

let greetings;

const customStyle = {color: ""}

if (currentTime < 12){
greetings = "Good Morning!"
customStyle.color = "green";
} else if( currentTime < 18){
  greetings = "Good Afternoon."
  customStyle.color = "blue";
} else if ( currentTime < 21){
 greetings = "Good Evening again"
  customStyle.color = "red";
} else if ( currentTime < 24){
  greetings = "We are closed now, See you in the #Morning"
  customStyle.color = "purple";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>{greetings}</h1>,
  document.getElementById("root")
);