import { SearchState } from "@/pages/SearchPage";
import { RestaurantSearchResponse } from "@/types/types";
import { useQuery } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (searchState: SearchState, city?: string) => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);

    const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
        const response = await fetch(
            `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
        );
        if (!response.ok) {
            throw new Error("Failed to get restaurant");
        }

        return response.json();
    };
    const {
        data: results,
        isLoading,

    } = useQuery(["searchRestaurant", searchState], createSearchRequest, { enabled: !!city });

    return { results, isLoading }

};
