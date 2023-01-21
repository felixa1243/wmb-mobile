import axiosInstance from "../config/axiosInstance";

export const LoginService = user => axiosInstance.post("/auth/login", {
    email: user.email, password: user.password
})