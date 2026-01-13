"use client"

import Image from "next/image";
import styles from "./CamperLayout.module.css";
import { Camper } from "@/types/camper";
import SvgIcon from "@/components/SvgIcon";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import ReviewsTab from "../CamperTabs/ReviewsTab";
import { useState } from "react";


type Props = {
  camper: Camper;
};

export default function CamperLayout({ camper }: Props) {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">("features");
  return (
    <main className={styles.page}>
     
      <header className={styles.header}>
        <h1 className={styles.title}>{camper.name}</h1>

        <div className={styles.meta}>
          <div className={styles.rating} 
          onClick={() => setActiveTab("reviews")}>
            <SvgIcon name="yellowStar" width={16} height={16} />
            <span>
              {camper.rating} ({camper.reviews.length} Reviews)
            </span>
          </div>

          <div className={styles.location}>
            <SvgIcon name="map" width={16} height={16} />
            <span>{camper.location}</span>
          </div>
        </div>

        <p className={styles.price}>€{camper.price.toFixed(2)}</p>
      </header>

      {/* GALLERY */}
      <section className={styles.gallery}>
        {camper.gallery.map((img, index) => (
          <div key={index} className={styles.imageWrap}>
            <Image
              src={img.thumb}
              alt={camper.name}
              fill
              className={styles.image}
            />
          </div>
        ))}
      </section>,

      <p className={styles.description}>{camper.description}</p>
<div className={styles.tabs}>
  <button
  className={`${styles.tab} ${activeTab === "features" ? styles.active : ""}`}
  onClick={() => setActiveTab("features")}
>
  Features
</button>

<button
  className={`${styles.tab} ${activeTab === "reviews" ? styles.active : ""}`}
  onClick={() => setActiveTab("reviews")}
>
  Reviews
</button>

</div>

      {/* CONTENT */}
      <section className={styles.content}>
        <div className={styles.left}>
          

          {activeTab === "features" && <div className={styles.futuresWrapper}><CamperFeatures camper={camper} /></div>}
          {activeTab === "reviews" && (
            <div className={styles.reviewsWrapper}>
    <ReviewsTab reviews={camper.reviews} />
  </div>
          )}
        </div>
    <aside className={styles.sidebar}>
     <h3 className={styles.sidebarTitle}>Book your campervan now</h3>
      <p className={styles.sidebarText}>
            Stay connected! We are always ready to help you.
      </p>

       <form className={styles.form}>
           <input placeholder="Name*" />
           <input placeholder="Email*" />
           <input placeholder="Booking date*" />
           <textarea placeholder="Comment" />

            <button type="submit">Send</button>
          </form>
        </aside>
      </section>
    </main>
    
    
  );
 
}
