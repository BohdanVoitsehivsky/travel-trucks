import { Camper } from "@/types/camper";
import SvgIcon from "../SvgIcon";

interface Props {
  camper: Camper;
}

const FEATURES = [
  { key: "transmission", label: "Automatic", icon: "automatic" },
  { key: "engine", label: "Petrol", icon: "petrol" },
  { key: "AC", label: "AC", icon: "ac" },
  { key: "bathroom", label: "Bathroom", icon: "bathroom" },
  { key: "kitchen", label: "Kitchen", icon: "kitchen" },
  { key: "TV", label: "TV", icon: "tv" },
  { key: "radio", label: "Radio", icon: "radio" },
  { key: "refrigerator", label: "Refrigerator", icon: "refrigerator" },
  { key: "microwave", label: "Microwave", icon: "microwave" },
  { key: "gas", label: "Gas", icon: "gas" },
  { key: "water", label: "Water", icon: "water" },
];

export default function FeaturesTab({ camper }: Props) {
  return (
    <div>
      <ul>
        {FEATURES.map(({ key, label, icon }) => {
          const value = camper[key as keyof Camper];
          if (!value) return null;

          return (
            <li key={key}>
              <SvgIcon name={icon} />
              <span>
                {typeof value === "string" ? value : label}
              </span>
            </li>
          );
        })}
      </ul>

      <h3>Vehicle details</h3>
      <ul>
        <li>Form: {camper.form}</li>
        <li>Length: {camper.length}</li>
        <li>Width: {camper.width}</li>
        <li>Height: {camper.height}</li>
        <li>Tank: {camper.tank}</li>
        <li>Consumption: {camper.consumption}</li>
      </ul>
    </div>
  );
}
