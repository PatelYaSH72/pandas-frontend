import React, { createContext, useEffect, useState } from 'react';
import { Technologyes_Data, TechnologyesData, TechnologyesName } from '../assets/assets';

// 1. Context Create Karein
export const MyContext = createContext();

// 2. Provider Component Banayein
export const MyProvider = ({ children }) => {

  
  const value = {
    TechnologyesData,
    Technologyes_Data,
    TechnologyesName
  };
// console.log(TechnologyesData)
  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};