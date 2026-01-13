import SvgIcon from "../SvgIcon";
import styles from "./ReviewsTab.module.css";

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface Props {
  reviews: Review[];
}

export default function ReviewsTab({ reviews }: Props) {
  if (!reviews || reviews.length === 0) {
    return <p className={styles.empty}>No reviews yet</p>;
  }

  return (
    <ul className={styles.list}>
      {reviews.map((review, index) => (
        <li key={index} className={styles.item}>
          <div className={styles.header}>
            {/* AVATAR */}
            <div className={styles.avatar}>
              {review.reviewer_name.charAt(0)}
            </div>

            <div>
              <p className={styles.name}>{review.reviewer_name}</p>

              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <SvgIcon
                    key={i}
                    name={i < review.reviewer_rating ? "yellowStar" : "whiteStar"}
                    width={16}
                    height={16}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className={styles.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
