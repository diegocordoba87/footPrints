import React from "react";

const SignUp = ({ setIsSidebarOpen }) => {

  return (
    <div onClick={() => setIsSidebarOpen(false)}>
      <h1 className="temporaryPageName">Sign Up</h1>
    </div>
  );
};

export default SignUp;
