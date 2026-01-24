import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'

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

 const getUserData = async () => {
  try {

    const res = await axios.get(backendUrl + "/api/user/user-data", {headers:{token: token}})

    console.log(res.data.user);

    setUserData(res.data.user)
    
    
  } catch (error) {
    
  }
 }

 useEffect(() => {
  getUserData();
}, [token]);


  

    
  const value = {
    isLoggedIn, setIsLoggedIn, token, setToken, backendUrl, userData, setUserData, getUserData
    
  };
// console.log(TechnologyesData)
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};