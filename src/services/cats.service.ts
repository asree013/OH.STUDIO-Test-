import { Cats } from "@/models/Cats.model";
import { endpoint } from "./endpoint.service";
import { enviromentDev } from "@/constant/enviromen.dev";

export function getAllCats(limit?: number) {
    try {
        return endpoint.get<Cats[]>(`${enviromentDev.images}/search?limit=${limit}`)
    } catch (error) {
        throw error
    }
}