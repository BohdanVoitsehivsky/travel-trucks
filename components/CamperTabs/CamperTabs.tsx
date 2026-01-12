"use client";

import { useState } from "react";
import { Camper } from "@/types/camper";
import FeaturesTab from "./FeaturesTab";
import ReviewsTab from "./ReviewsTab";

interface Props {
  camper: Camper;
}

export default function CamperTabs({ camper }: Props) {
  const [activeTab, setActiveTab] = useState<"features" | "reviews">("features");

  return (
    <section>
      <div>
        <button onClick={() => setActiveTab("features")}>
          Features
        </button>
        <button onClick={() => setActiveTab("reviews")}>
          Reviews
        </button>
      </div>

      {activeTab === "features" && <FeaturesTab camper={camper} />}
      {activeTab === "reviews" && (
        <ReviewsTab reviews={camper.reviews} />
      )}
    </section>
  );
}
