
"use client";
import styles from "./CatalogPage.module.css";

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

    }, [])


    return (
        <main className={styles.wrapper}>
  <aside className={styles.sidebar}>
    <Filters />
  </aside>

  <section className={styles.content}>
    <h1 className={styles.title}>Catalog</h1>

    <ul className={styles.list}>
      {campers.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
    </ul>

    {hasMore && (
         <div className={styles.loadMoreWrapper}>
      <button className={styles.loadMore} onClick={loadMore}>
        Load more
      </button>
      </div>
    )}
  </section>
</main>

    )

}

