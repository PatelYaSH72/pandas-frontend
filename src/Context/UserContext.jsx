import React, { createContext, useEffect, useState } from 'react';

// 1. Context Create Karein
export const UserContext = createContext();

// 2. Provider Component Banayein
export const UserProvider = ({ children }) => {
  
  const [token, setToken] = useState(localStorage.getItem("token") || "")

    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    const [userData, setUserData] = useState(()=>{const savedUser = localStorage.getItem("userData");
  return savedUser ? JSON.parse(savedUser) : {};});



    const backendUrl = import.meta.env.VITE_BACKEND_URL

     useEffect(() => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}, [token]);

  useEffect(() => {
  if (userData && Object.keys(userData).length > 0) {
    localStorage.setItem("userData", JSON.stringify(userData));
  }
}, [userData]);

    
  const value = {
    isLoggedIn, setIsLoggedIn, token, setToken, backendUrl, userData, setUserData
    
  };
// console.log(TechnologyesData)
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};