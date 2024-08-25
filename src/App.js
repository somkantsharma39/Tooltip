//Importing useState Hook
import { useState } from "react";
// Importing add styles
import "./App.css";
//npm package to manage tooltip
import { Tooltip } from "react-tooltip";

function App() {
  // Created a state to update position
  const [place, setPlace] = useState("right");

  //Created a function to update state as per position input from user
  function updateData(n) {
    let p = n.target.value;
    setPlace(p);
  }
  return (
    <div>
      {/* Created a label for option menu to select position of tooltip */}
      <label htmlFor="place">Select a Position: </label>
      {/* Added different position using select tag and used onchange attribute to take input of position from user and update state using function updateData() */}
      <select name="palce" id="place" onChange={updateData}>
        <option className="dir" value={"right"}>
          RIGHT
        </option>
        <option className="dir" value={"left"}>
          LEFT
        </option>
        <option className="dir" value={"top"}>
          TOP
        </option>
        <option className="dir" value={"bottom"}>
          BOTTOM
        </option>
      </select>
      {/* Used data-tooltip-id to pass id to tooltip component and data-tooltip-content to add component */}
      <h2
        data-tooltip-id={"my-tooltip"}
        data-tooltip-content={"Hey, Where you see, I'm here..."}>
        Hover Over Me
      </h2>
      {/* Added Tooltip component and added place attribute along with state to update the postion of tooltip */}
      <Tooltip id="my-tooltip" place={place} />
      {/* A massege to tell the position of tooltip */}
      <div>
        <p>Your Tooltip is diplaying on {place}</p>
      </div>
    </div>
  );
}

// Exporting App
export default App;
