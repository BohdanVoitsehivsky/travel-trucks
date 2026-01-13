import { Camper } from "@/types/camper";
import Link from "next/link";
import Image from "next/image";
import SvgIcon from "./SvgIcon";
import { useFavoriteStore } from "@/store/useFavoriteStore";
import styles from "./CamperCard.module.css";


interface CamperCardProps {
    camper: Camper;
}




const FEATURE_MAP = [
  { key: "transmission", label: "Automatic", icon: "automatic" },
  { key: "engine", label: "Petrol", icon: "petrol" },

  { key: "AC", label: "AC", icon: "ac" },
  { key: "kitchen", label: "Kitchen", icon: "kitchen" },
  { key: "TV", label: "TV", icon: "tv" },
  { key: "radio", label: "Radio", icon: "radio" },
  { key: "refrigerator", label: "Refrigerator", icon: "refrigerator" },
  { key: "microwave", label: "Microwave", icon: "microwave" },
  { key: "gas", label: "Gas", icon: "gas" },
  { key: "water", label: "Water", icon: "water" },
];




export default function CamperCard ({camper}: CamperCardProps) {
    const previewImage = camper.gallery?.[0]?.thumb;

    const reviewCount = camper.reviews?.length ?? 0;

    const { toggleFavorite, isFavorite } = useFavoriteStore();
    const favorite = isFavorite(camper.id);


    
    return (

        <li className={styles.card}>
            {previewImage && (
                
                <Image 
                className={styles.image}
                src={previewImage}
                alt={camper.name}
                width={292}
                height={320}
                
                
                />
                
            )}

        
        <div className={styles.content} >
            <div className={styles.header}>
            <h2 className={styles.name}>{camper.name}</h2>
            
            <div className={styles.priceBlock}>
  <span className={styles.price}>
              €{camper.price.toFixed(2)}
            </span>

  <button className={styles.favoriteBtn} onClick={() => toggleFavorite(camper)}>
    <SvgIcon
      name={favorite ? "redheart" : "blackheart"}
      width={24}
      height={24}
    />
  </button>
  </div>
</div>

<div className={styles.meta}>
          <div className={styles.rating}>
            <SvgIcon name="yellowStar" width={16} height={16} />
            <span>
              {camper.rating} ({reviewCount} Reviews)
            </span>
          </div>

          <div className={styles.location}>
            {camper.location}
          </div>
        </div>

        
        <p className={styles.description}>
          {camper.description}
        </p>

        
        <ul className={styles.features}>
          {FEATURE_MAP.map(({ key, label, icon }) => {
            const value = camper[key as keyof Camper];
            if (!value) return null;

            return (
              <li className={styles.feature} key={key}>
                <SvgIcon name={icon} width={20} height={20} />
                <span>
                  {typeof value === "string" ? value : label}
                </span>
              </li>
            );
          })}
        </ul>

        
        <Link
          className={styles.link}
          href={`/catalog/${camper.id}`}
        >
          Show more
        </Link>
      </div>
    </li>
  );
}