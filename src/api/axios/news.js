import { API as axios } from "./axios";

export const getNewsReq = () => axios.get("/news/getNews");
export const createNewsReq = (newsData) =>
  axios.post("/news/createNew", newsData, {
    headers: {
      "Content-Type": "application/json", 
    },
  });
export const deleteNewsReq = (newId) =>
  axios.delete(`/news/deleteNew/${newId}`);

// Obtener noticias de una API externa que es lo q usaremos por default
export const getApiNewsReq = () => axios.get("/news/getApiNews");
