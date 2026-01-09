
"use client";
import { useEffect } from "react";
import CamperCard from "@/components/CamperCard";
import { useCamperStore } from "@/store/useCampersStore";
import Filters from "@/components/Filters/Filters";

export default  function CatalogPage() {

    const {
        campers,
        fetchCampers,
        loadMore,
        hasMore,
        isLoading,
    } = useCamperStore();
 
    useEffect(() => {
        fetchCampers();

    }, [fetchCampers])


    return (
        <main style={ {display: "flex", gap: "40px" }}>
            <Filters/>
        <h1> Catalog</h1>
        {isLoading && campers.length === 0 && <p>Loading...</p>}
        <ul>
            {campers.map(camper => (
                <CamperCard key={camper.id} camper={camper} />
            ))}
        </ul>

        {hasMore && (
            <button onClick={loadMore} disabled={isLoading}>
                {isLoading ? "Loading..." : "Load More"}
                </button>
        )}
        </main>
    )

}