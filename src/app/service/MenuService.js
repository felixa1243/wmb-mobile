import axiosInstance from "../config/axiosInstance";

export const getMenu = () => axiosInstance.get('/menus')
export const deleteMenu = id => axiosInstance.delete('/menus/' + id)
export const getMenuById = id => axiosInstance.get('/menus/' + id)
export const editMenu = () => axiosInstance.put('/menus/')
export const addMenu = payload => axiosInstance.post('/menus', {...payload})