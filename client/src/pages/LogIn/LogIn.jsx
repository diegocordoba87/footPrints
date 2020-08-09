import React from "react";

const LogIn = ({ setIsSidebarOpen }) => {

  return (
    <div onClick={() => setIsSidebarOpen(false)}>
      <h1 className="temporaryPageName">Log In</h1>
    </div>
  );
};

export default LogIn;
