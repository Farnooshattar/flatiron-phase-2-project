import React, { useEffect, useState } from "react";

function Counter() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Get the current visit count from local storage
    const storedCount = localStorage.getItem("visitCount");

    if (storedCount) {
      // If visit count exists, parse and update the state
      const count = parseInt(storedCount);
      setVisitCount(count);
      // Increment the count and update local storage
      const newCount = count + 1;
      localStorage.setItem("visitCount", newCount.toString());
    } else {
      // If visit count doesn't exist, set it to 1
      setVisitCount(1);
      localStorage.setItem("visitCount", "1");
    }
  }, []);

  return (
    <div style={{ color: "white" }}>
      <h2>I have been visited {visitCount} times</h2>
    </div>
  );
}

export default Counter;
