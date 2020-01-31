import axios from 'axios';
export const edgewood = axios.create({
  baseURL: "https://trayvonnorthern.com/Edgewood-API/public/api",
  headers: { "Content-Type": "application/json" }
});
