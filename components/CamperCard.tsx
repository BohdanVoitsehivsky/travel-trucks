import { Camper } from "@/types/camper";
import Link from "next/link";
import Image from "next/image";
import SvgIcon from "./SvgIcon";

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
            
            <p>€{camper.price.toFixed(2)}</p>
            <p>
                <SvgIcon 
                name={camper.rating > 0 ? "yellowStar" : "whiteStar"}
                width={16} height={16} />
  <span>{camper.rating}</span>
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