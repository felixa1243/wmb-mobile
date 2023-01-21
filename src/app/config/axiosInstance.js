import axios from "axios";
import Constants from "expo-constants";

const {manifest} = Constants;

const axiosInstance = axios.create({
    baseURL: `http://${manifest.debuggerHost.split(':').shift()}:3002/api`,
    headers: {
        "Content-type": "application/json"
    }
})
export default axiosInstance