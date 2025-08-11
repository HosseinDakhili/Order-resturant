import React, { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";

export default function Auth() {
  const [pageType, setPageType] = useState("login");
  const handlePageType = () => {
    setPageType(pageType == "login" ? "register" : "login");
  };
  return (
    <>
      {pageType == "login" ? (
        <Login handlePageType={handlePageType} />
      ) : (
        <Register handlePageType={handlePageType} />
      )}
    </>
  );
}
