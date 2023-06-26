import React, { useState } from "react";
// use showmodal for login
function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDialogSubmit = (e) => {
    e.preventDefault();
    console.log("login:", login, password);
    setShowDialog(false);
    setIsLoggedin(true); // Set isLoggedin to true when user confirms
  };

  const handleUpdateDetailsClick = () => {
    console.log(isLoggedin);
    if (isLoggedin) {
      setIsLoggedin(false); // Toggle isLoggedin state to false when clicking on "Logout"
    } else {
      setShowDialog(true); // Show login dialog when clicking on "Login"
    }
    setShowDialog(true);
  };

  const handleCancelClick = () => {
    setShowDialog(false);
  };
  return (
    <div>
      <h1 style={{ color: "white", fontSize: "small" }}>Please login</h1>
      <button id="login" onClick={handleUpdateDetailsClick}>
        {isLoggedin ? "Logout" : "Login"}
      </button>

      {showDialog && (
        <dialog open id="loginDialog">
          <form onSubmit={handleDialogSubmit}>
            <p>
              <label htmlFor="username">username:</label>
              <input
                name="login"
                value={login}
                onChange={handleLoginChange}></input>
              <label htmlFor="password">password:</label>
              <input
                name="password"
                value={password}
                onChange={handlePasswordChange}></input>
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

        {/* <button type="submit">submit</button> */}
      </div>
    </div>
  );
}

export default Login;
