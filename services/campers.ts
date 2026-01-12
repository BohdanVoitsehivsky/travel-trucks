import axios from "axios";

import { Camper, CampersResponse } from "@/types/camper";


type GetCampersParams = {
  page?: number;
  limit?: number;
  location?: string;
  form?: string;
  transmission?: string;
  features?: string[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
    throw new Error("API URL is not defined")
}

const api = axios.create({
  baseURL: API_URL,
});

export async function getCampers(params: GetCampersParams): Promise<Camper[]> {
  const res = await api.get<CampersResponse>(`/campers`, {
    params: {
      page: params.page,
      limit: params.limit,
      location: params.location,
      form: params.form,
      transmission: params.transmission,
      ...Object.fromEntries(
        params.features?.map((feature) => [feature, true]) ?? []
      ),
    },
  }) ;
  return res.data.items;
}


export async function getCamperById(id: string): Promise<Camper> {
    const res = await api.get<Camper>(`/campers/${id}`);
    return res.data;
}