import { getCamperById } from "@/services/campers";
import CamperLayout from "@/components/CamperLayout/CamperLayout";

type CamperPageProps = {
  params: {
    id: string;
  };
};

export default async function CamperPage({ params }: CamperPageProps) {
  const camper = await getCamperById(params.id);

  return <CamperLayout camper={camper} />;
}
