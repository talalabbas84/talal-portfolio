"use client";
import React from 'react';
// @ts-ignore
import WaterWave from 'react-water-wave';

interface WaterWaveWrapperProps {
  imageUrl: string;
  dropRadius: string;
  perturbance: string;
  resolution: string;
  children: () => React.ReactNode;
}

const WaterWaveWrapper: React.FC<WaterWaveWrapperProps> = ({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  children
}) => {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
};

export default WaterWaveWrapper;
