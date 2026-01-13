

import { getCamperById } from "@/services/campers";
import CamperLayout from "@/components/CamperLayout/CamperLayout";

type CamperPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CamperPage({ params }: CamperPageProps) {
   const { id } = await params;
  
  const camper = await getCamperById(id);

  return <CamperLayout camper={camper} />;
}
