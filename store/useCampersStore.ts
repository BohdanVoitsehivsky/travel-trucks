import { getCampers } from "@/services/campers";
import { Camper } from "@/types/camper";
import {create} from "zustand";

type Filters = {
    location: string;
    form: string;
    transmission: string;
    features: string[];
}

type CampersState = {
    campers: Camper[];
    page: number;
    hasMore: boolean;
    isLoading : boolean;
    filters: Filters;
    fetchCampers: () => Promise<void>;
    loadMore: () => Promise<void >;
    setFilters: (filters: Partial<Filters>) => void;
    resetCampers: () => void;
}

export const useCamperStore = create<CampersState> ((set,get) => ({
    campers: [],
    page: 1,
    hasMore: true,
    isLoading: false,

    filters: {
        location: "",
        form: "",
        transmission: "",
        features: [],

    },

    fetchCampers: async () => {
        set({isLoading: true});

        const {page, filters} =get();

        const data = await getCampers({
            page,
            limit: 4,
            ...filters,
        });

        set((state) => ({
            campers: page === 1 ? data : [...state.campers, ...data],
            hasMore: data.length === 4,
            isLoading: false,
        }));

    },

    loadMore: async() => {
        set((state) => ({page: state.page + 1}));
        await get().fetchCampers();

    },
    setFilters: (newFilters) => {
        set((state) => ({
            filters: {...state.filters, ...newFilters},
            page: 1,
            hasMore: true,

        }));

    },

    resetCampers: () => {
        set ({
            campers: [],
            page:1,
            hasMore: true,
        });
    },
        }));
