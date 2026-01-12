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
  if (!reviews || reviews.length === 0) {
    return <p>No reviews yet</p>;
  }

  return (
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>
          
          <div>
            <strong>{review.reviewer_name}</strong>

            <div>
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

         
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
