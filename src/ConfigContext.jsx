// src/context/ConfigContext.js
import React, { createContext } from "react";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const config = {
    apiUrl: import.meta.env.VITE_API_URL,
    appName: import.meta.env.VITE_API_KEY,
  };
  console.log(config)
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};
