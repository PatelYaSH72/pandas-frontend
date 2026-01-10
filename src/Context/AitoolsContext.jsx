import React, { createContext, useEffect, useState } from 'react';
import { AIToolsData, TechnologyesData } from '../assets/assets';

// 1. Context Create Karein
export const AIContext = createContext();

// 2. Provider Component Banayein
export const AiProvider = ({ children }) => {

  
  const value = {
    AIToolsData
  };
// console.log(TechnologyesData)
  return (
    <AIContext.Provider value={value}>
      {children}
    </AIContext.Provider>
  );
};