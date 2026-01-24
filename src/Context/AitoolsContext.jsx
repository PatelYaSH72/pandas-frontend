import React, { createContext, useContext, useEffect, useState } from "react";
// import { AIToolsData, TechnologyesData } from "../assets/assets";
import axois from "axios";
import { UserContext } from "./UserContext";

// 1. Context Create Karein
export const AIContext = createContext();



// 2. Provider Component Banayein
export const AiProvider = ({ children }) => {

  const [AIToolsData, setAIToolsData] = useState([])

  const {token} = useContext(UserContext);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAIToolsData = async () => {
    const { data } = await axois.get(backendUrl + "/api/user/AiTools-data");

    setAIToolsData(data.data)
    

    
    
   
  };

   useEffect(() => {
  
  getAIToolsData();
}, [token]);

  const value = {
    AIToolsData,
    getAIToolsData,
    token,
    backendUrl
  };
  // console.log(TechnologyesData)
  return <AIContext.Provider value={value}>{children}</AIContext.Provider>;
};
