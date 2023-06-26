import React from "react";
import { useParams } from "react-router-dom";
function DisplayCat() {
  const params = useParams();
  console.log("params", params);
  return <div>DisplayCat</div>;
}

export default DisplayCat;
