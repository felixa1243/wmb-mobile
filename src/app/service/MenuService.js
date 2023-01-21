import axiosInstance from "../config/axiosInstance";

export const getMenu = () => axiosInstance.get('/menus')