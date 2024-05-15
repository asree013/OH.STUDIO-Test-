import { enviromentDev } from "@/constant/enviromen.dev";
import axios from "axios";

export const endpoint = axios.create({
    baseURL: enviromentDev.baseUrl
})