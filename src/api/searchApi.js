import axios from "axios";
import { useContext } from "react";
import { AIContext } from "../Context/AitoolsContext";

export const semanticSearch = async (query) => {
  if (!query) return { tools: [], resources: [] };

  const {backendUrl} = useContext(AIContext)

  const res = await axios.get(backendUrl + `/api/search`, {
    params: { query },
  });

  return res.data;
};
