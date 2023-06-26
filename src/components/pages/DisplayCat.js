import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

function DisplayCat() {
  const [cat, setCat] = useState([]);

  const params = useParams();

  console.log(params);
  useEffect(() => {
    fetch(`http://localhost:6001/cats/${params.id}`)
      .then((response) => response.json())
      .then((data) => setCat(data));
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card>
        <div className="image">
          <img src={cat.url} alt="" />
        </div>

        <div style={{ color: "red" }}>{cat.name}</div>
        <div style={{ color: "black" }}>
          <p style={{ fontSize: "15px" }}>{cat.comment}</p>
        </div>
        
      </Card>
    </div>
  );
}

export default DisplayCat;
