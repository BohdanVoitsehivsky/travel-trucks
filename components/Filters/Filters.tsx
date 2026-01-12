"use client";
import { useState } from "react";
import SvgIcon from "@/components/SvgIcon";
import { useCamperStore } from "@/store/useCampersStore";
import styles from "./Filters.module.css";
import {
  TRANSMISSION_OPTIONS,
  EQUIPMENT_OPTIONS,
  VEHICLE_TYPES,
} from "./Filters.config";
export default function Filters() {
    const {setFilters, resetCampers, fetchCampers} = useCamperStore();
    const [location, setLocation] = useState("");
    const [form, setForm] = useState("");
    const [features, setFeatures] = useState<string[]>([]);
    const [transmission, setTransmission] = useState("");


    const toggleFeature = (feature: string) => {
        setFeatures(prev =>
             prev.includes(feature)
              ? prev.filter(f => f !== feature) 
        : [...prev, feature]);
    };


        const handleSearch = () => {
            resetCampers();
            setFilters({
                location,
                form,
                transmission,
                features,
            });
            fetchCampers();

        };
    
    return (
        <aside className={styles.sidebar}>
           <div className={styles.block}>
        <label className={styles.label}>Location</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Kyiv, Ukraine"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>

      <h2 className={styles.title}>Filters</h2>


        <div className={styles.block}>
  <h3 className={styles.subtitle}>Transmission</h3>

  <div className={styles.grid}>
    {TRANSMISSION_OPTIONS.map(option => (
      <label key={option.value} className={styles.card}>
        <input
          type="radio"
          name="transmission"
          checked={transmission === option.value}
          onChange={() => setTransmission(option.value)}
        />

        <SvgIcon name={option.icon} width={32} height={32} />
        <span>{option.label}</span>
      </label>
    ))}
  </div>
</div>

        

        <div className={styles.block}>
  <h3 className={styles.subtitle}>Vehicle equipment</h3>

  <div className={styles.grid}>
    {EQUIPMENT_OPTIONS.map(option => (
      <label key={option.value} className={styles.card}>
        <input
          type="checkbox"
          checked={features.includes(option.value)}
          onChange={() => toggleFeature(option.value)}
        />

        <SvgIcon name={option.icon} width={32} height={32} />
        <span>{option.label}</span>
      </label>
    ))}
  </div>
</div>

      <div className={styles.block}>
  <h3 className={styles.subtitle}>Vehicle type</h3>

  <div className={styles.grid}>
    {VEHICLE_TYPES.map(option => (
      <label key={option.value} className={styles.card}>
        <input
          type="radio"
          name="form"
          checked={form === option.value}
          onChange={() => setForm(option.value)}
        />

        <SvgIcon name={option.icon} width={32} height={32} />
        <span>{option.label}</span>
      </label>
    ))}
  </div>
</div>

      <button className={styles.searchBtn} onClick={handleSearch}>Search</button>
        </aside>
    )
}