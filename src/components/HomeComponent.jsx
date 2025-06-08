import React, { useContext } from "react";
import { ConfigContext } from "../ConfigContext.jsx";

const HomeComponent = () => {
  const { apiUrl, appName } = useContext(ConfigContext);

  return (
    <div className="container mt-5">
      <h2>App Name: {appName}</h2>
      <p>API URL: {apiUrl}</p>
    </div>
  );
};

export default HomeComponent;
