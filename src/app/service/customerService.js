import axiosInstance from "../config/axiosInstance";

export const getCustomer = ()=>axiosInstance.get('/customers')