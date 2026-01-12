import { getCamperById } from "@/services/campers";
import CamperGallery from "@/components/CamperGallery";
import CamperTabs from "@/components/CamperTabs/CamperTabs";
import BookingForm from "@/components/BookingForm";

type CamperPageProps = {
  params: {
    id: string;
  };
};

export default async function CamperPage({ params }: CamperPageProps) {
const { id } = await params;
const camper = await getCamperById(id);
  return (
    <section>
      <h1>{camper.name}</h1>
      <p>€{camper.price.toFixed(2)}</p>
      <p>{camper.location}</p>


      <CamperGallery
        gallery={camper.gallery}
        name={camper.name}
      />

      <CamperTabs camper={camper} />

      <BookingForm />
    </section>
  );
}
