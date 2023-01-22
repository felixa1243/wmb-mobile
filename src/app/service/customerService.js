import axiosInstance from "../config/axiosInstance";

export const getCustomer = () => axiosInstance.get('/customers')
export const deleteCustomer = (id) => axiosInstance.delete('/customers/'+id)