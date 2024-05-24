
"use client";
import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";

export default function Page() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => <div className="h-screen">dsdsddsds</div>}

    </WaterWaveWrapper>
  );
}
