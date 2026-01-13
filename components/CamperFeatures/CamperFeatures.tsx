import styles from "./CamperFeatures.module.css";
import { Camper } from "@/types/camper";
import SvgIcon from "@/components/SvgIcon";

type Props = {
  camper: Camper;
};

const FEATURES = [
  { key: "transmission", label: "Automatic", icon: "automatic" },
  { key: "engine", label: "Petrol", icon: "petrol" },
  { key: "AC", label: "AC", icon: "ac" },
  { key: "kitchen", label: "Kitchen", icon: "kitchen" },
  { key: "TV", label: "TV", icon: "tv" },
  { key: "bathroom", label: "Bathroom", icon: "bathroom" },
];

export default function CamperFeatures({ camper }: Props) {
  return (
    <div className={styles.wrapper}>
      {/* FEATURES */}
      <ul className={styles.features}>
        {FEATURES.map(({ key, label, icon }) => {
          const value = camper[key as keyof Camper];
          show: if (!value) return null;

          return (
            <li key={key} className={styles.feature}>
              <SvgIcon name={icon} width={20} height={20} />
              <span>{typeof value === "string" ? value : label}</span>
            </li>
          );
        })}
      </ul>

      {/* VEHICLE DETAILS */}
      <div className={styles.details}>
        <h3 className={styles.detailsTitle}>Vehicle details</h3>

        <ul className={styles.detailsList}>
          <li><span>Form</span><span>{camper.form}</span></li>
          <li><span>Length</span><span>{camper.length}</span></li>
          <li><span>Width</span><span>{camper.width}</span></li>
          <li><span>Height</span><span>{camper.height}</span></li>
          <li><span>Tank</span><span>{camper.tank}</span></li>
          <li><span>Consumption</span><span>{camper.consumption}</span></li>
        </ul>
      </div>
    </div>
  );
}
