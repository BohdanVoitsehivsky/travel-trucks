import { Camper } from "@/types/camper";
import Link from "next/link";

interface CamperCardProps {
    camper: Camper;
}

export default function CamperCard ({camper}: CamperCardProps) {
    return (
        <div>
            <h2>{camper.name}</h2>
            <p>{camper.location}</p>
            <p>€{camper.price.toFixed(2)}</p>

            <Link
            href={`/catalog/${camper.id}`}>

            Show more

            </Link>
        </div>
    )
}