import React, { createContext, useEffect, useState } from 'react';

// 1. Context Create Karein
export const UserContext = createContext();

// 2. Provider Component Banayein
export const UserProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  
  const value = {
    isLoggedIn, setIsLoggedIn,
    loginData, setLoginData,
    signupData, setSignupData
  };
// console.log(TechnologyesData)
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};