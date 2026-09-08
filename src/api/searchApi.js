import axios from "axios";

export const semanticSearch = async (query, backendUrl) => {
  if (!query) return { tools: [], resources: [] };

  
  

  const res = await axios.get(`${backendUrl}/api/user/search`, {
    params: { query },
  });

  
  return res.data;

  
};
