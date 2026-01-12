import { Camper } from "@/types/camper";
import CamperGallery from "@/components/CamperGallery";
import CamperTabs from "@/components/CamperTabs/CamperTabs";
import BookingForm from "@/components/BookingForm";
import SvgIcon from "@/components/SvgIcon";

import styles from "./CamperLayout.module.css";

interface Props {
  camper: Camper;
}

export default function CamperLayout({ camper }: Props) {
  return (
    <section className={styles.wrapper}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1 className={styles.title}>{camper.name}</h1>

        <div className={styles.meta}>
          <span className={styles.rating}>
            <SvgIcon name="yellowStar" />
            {camper.rating}
          </span>

          <span className={styles.location}>
            {camper.location}
          </span>
        </div>

        <p className={styles.price}>
          €{camper.price.toFixed(2)}
        </p>
      </div>

      {/* GALLERY */}
      <CamperGallery gallery={camper.gallery} name={camper.name} />

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.left}>
          <CamperTabs camper={camper} />
        </div>

        <div className={styles.right}>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
