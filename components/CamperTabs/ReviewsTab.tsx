import SvgIcon from "../SvgIcon";

interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface Props {
  reviews: Review[];
}

export default function ReviewsTab({ reviews }: Props) {
  return (
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>
          <strong>{review.reviewer_name}</strong>

          <p>
            <SvgIcon name="yellowStar" />
            {review.reviewer_rating}
          </p>

          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
