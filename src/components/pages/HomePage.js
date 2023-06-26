import React from "react";
import Counter from "../Counter";
import LoginShowmodal from "../LoginShowmodal";

function HomePage() {
  return (
    <div>
      <div>
        {/* Render the Counter component */}
        <Counter />

        {/* Render the LoginShowmodal component */}
        <LoginShowmodal />
      </div>

      {/* Display an image */}
      <img
        src={require("../images/679db61ec05330a482f8ca16488cf145.gif")}
        alt=""
      />
    </div>
  );
}

export default HomePage;
