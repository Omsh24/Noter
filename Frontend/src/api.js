import axios from "axios";

const API = axios.create({
    baseURL: "https://noter-f5eu.onrender.com/api/v1/users",
    withCredentials: true,
    header: {
        "Content-type": "application.json",
    },
})

export default API;
