import axios from "axios";

const API = axios.create({
    baseURL: "https://noter-f5eu.onrender.com",
    withCredentials: true,
    header: {
        "Content-type": "application.json",
    },
})

export default API;
