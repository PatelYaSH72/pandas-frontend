import axios from "axios";

export const semanticSearch = async (query, backendUrl) => {
  if (!query) return { tools: [], resources: [] };

  console.log("aaa");
  

  const res = await axios.get(`${backendUrl}/api/user/search`, {
    params: { query },
  });

  console.log(res.data);
  return res.data;

  
};
