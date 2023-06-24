import React from "react";
import Counter from "../Counter";

function HomePage() {
  return (
    <div>
      <div>
        <Counter />
      </div>
      <img src={require("../images/679db61ec05330a482f8ca16488cf145.gif")} />
    </div>
  );
}

export default HomePage;
