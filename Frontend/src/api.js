import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/v1/users",
    header: {
        "Content-type": "application.json",
    },
})

export default API;