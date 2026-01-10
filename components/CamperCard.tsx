import { Camper } from "@/types/camper";
import Link from "next/link";
import Image from "next/image";
import SvgIcon from "./SvgIcon";
import { useFavoriteStore } from "@/store/useFavoriteStore";

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

    const reviewCount = camper.reviews.length

    const { toggleFavorite, isFavorite } = useFavoriteStore();
    const favorite = isFavorite(camper.id);


    
    return (

        <li>
            {previewImage && (
                <Image 
                src={previewImage}
                alt={camper.name}
                width={292}
                height={320}
                />
            )}

        
        <div>
            <h2>{camper.name}</h2>
            
            <div>
  <p>€{camper.price.toFixed(2)}</p>

  <button onClick={() => toggleFavorite(camper)}>
    <SvgIcon
      name={favorite ? "redheart" : "blackheart"}
      width={24}
      height={24}
    />
  </button>
</div>
            <p>
                <SvgIcon 
                name={camper.rating > 0 ? "yellowStar" : "whiteStar"}
                width={16} height={16} />
  <span>
    {camper.rating} ({reviewCount} Reviews)
  </span>
  </p>
            <p>{camper.location}</p>
            <p>{camper.description}</p>

            
          <ul>
          {FEATURE_MAP.map(({ key, label, icon }) => {
            const value = camper[key as keyof Camper];

            
            if (!value) return null;

            return (
              <li key={key}>
                <SvgIcon name={icon} width={20} height={20} />
                <span>
                  {typeof value === "string" ? value : label}
                </span>
              </li>
            );
          })}
        </ul>

            <Link
            href={`/catalog/${camper.id}`}>

            Show more

            </Link>
        </div>
        </li>
    )
}