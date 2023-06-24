import React, { useState } from "react";
function Popupmodal({ updatedcomment, handleNewComment }) {
  const [comment, setComment] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleDialogSubmit = (e) => {
    e.preventDefault();
    handleNewComment(comment);
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
        Comment...
      </button>

      {showDialog && (
        <dialog open id="favDialog">
          <form onSubmit={handleDialogSubmit}>
            <p>
              {updatedcomment}
              <br />
              <label htmlFor="favAnimal">Comment:</label>
              <input type="text" value={comment} onChange={handleInputChange} />
              {/* <select
                id="favAnimal"
                name="favAnimal"
                value={favAnimal}
                onChange={handleInputChange}>
                <option></option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select> */}
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
    </div>
  );
}

export default Popupmodal;
