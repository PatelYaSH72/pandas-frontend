import React, { createContext, useEffect, useState, useContext } from "react";
import {
  // Technologyes_Data,
  TechnologyesName,
} from "../assets/assets";
import axios from "axios";
import { UserContext } from "./UserContext";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [Technologyes_Data, setResourcesData] = useState(null);

  useEffect(() => {
    

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${backendUrl}/api/user/Resources-Data`,
          { headers: { token } }
        );
        setResourcesData(res.data.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };

    fetchData();
  }, [token]);

  // console.log(resourcesData);
  

  const value = {
    Technologyes_Data,
    TechnologyesName,
    token,
    backendUrl
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};
