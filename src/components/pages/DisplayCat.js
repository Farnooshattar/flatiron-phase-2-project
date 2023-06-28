import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

function DisplayCat() {
  const [cat, setCat] = useState([]);

  // Accessing the dynamic parameter from the URL
  const params = useParams();

  console.log(params);
  useEffect(() => {
    // Fetch the cat data based on the ID from the server
    // fetch(`http://localhost:6001/cats/${params.id}`)
    fetch(`https://json-server-81fm.onrender.com/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCat(data));
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <div className="image">
          {/* Displaying the cat image */}
          <img src={cat.url} alt="" />
        </div>

        <div style={{ color: "red" }}>{cat.name}</div>
        <div style={{ color: "black" }}>
          <p style={{ fontSize: "15px" }}>{cat.comment}</p>
        </div>
        {/* Link to navigate back to the cat collection */}
        <Link style={{ fontWeight: "bold" }} to="/cats">
          Go Back
        </Link>
      </Card>
    </div>
  );
}

export default DisplayCat;
