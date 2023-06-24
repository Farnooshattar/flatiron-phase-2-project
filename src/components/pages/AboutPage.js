import React, { useState } from "react";
function AboutPage() {
  const [favAnimal, setFavAnimal] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleInputChange = (e) => {
    setFavAnimal(e.target.value);
  };

  const handleDialogSubmit = (e) => {
    e.preventDefault();
    console.log("Favorite animal:", favAnimal);
    setShowDialog(false);
  };

  const handleUpdateDetailsClick = () => {
    setShowDialog(true);
  };

  const handleCancelClick = () => {
    setShowDialog(false);
  };
  return (
    <div>
      <h1 style={{ color: "white" }}>About this Project</h1>
      <button id="updateDetails" onClick={handleUpdateDetailsClick}>
        Update details
      </button>

      {showDialog && (
        <dialog open id="favDialog">
          <form onSubmit={handleDialogSubmit}>
            <p>
              <label htmlFor="favAnimal">Favorite animal:</label>
              <select
                id="favAnimal"
                name="favAnimal"
                value={favAnimal}
                onChange={handleInputChange}>
                <option></option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select>
            </p>
            <div>
              <button id="cancel" type="reset" onClick={handleCancelClick}>
                Cancel
              </button>
              <button type="submit">Confirm</button>
            </div>
          </form>
        </dialog>
      )}
      <div>
        <div></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button type="submit">submit</button>
      </div>
    </div>
  );
}

export default AboutPage;
