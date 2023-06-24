// import React, { useState } from "react";
// function Popupmodal({ updatedcomment, handleNewComment }) {
//   const [newcomment, setComment] = useState({ updatedcomment });
//   const [showDialog, setShowDialog] = useState(false);

//   const handleInputChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleDialogSubmit = (e) => {
//     e.preventDefault();
//     handleNewComment(e.target.comment);
//     setShowDialog(false);
//     fetch(`http://localhost:6001/cats/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ comment: newcomment }),
//     });
//   };

//   const handleUpdateDetailsClick = () => {
//     setShowDialog(true);
//   };

//   const handleCancelClick = () => {
//     setShowDialog(false);
//   };
//   return (
//     <div>
//       <button id="updateDetails" onClick={handleUpdateDetailsClick}>
//         Comment...
//       </button>

//       {showDialog && (
//         <dialog open id="favDialog">
//           <form onSubmit={handleDialogSubmit}>
//             <p>
//               {newcomment}
//               <br />
//               <label htmlFor="favAnimal">Comment:</label>
//               <input type="text" value={comment} onChange={handleInputChange} />
//               {/* <select
//                 id="favAnimal"
//                 name="favAnimal"
//                 value={favAnimal}
//                 onChange={handleInputChange}>
//                 <option></option>
//                 <option>Brine shrimp</option>
//                 <option>Red panda</option>
//                 <option>Spider monkey</option>
//               </select> */}
//             </p>
//             <div>
//               <button id="cancel" type="reset" onClick={handleCancelClick}>
//                 Cancel
//               </button>
//               <button type="submit">Confirm</button>
//             </div>
//           </form>
//         </dialog>
//       )}
//     </div>
//   );
// }

// export default Popupmodal;
