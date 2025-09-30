"use client";

import React from "react";

type Feature = {
  icon?: string;
  label: string;
};

const FeaturesList: React.FC<{ features?: Feature[] }> = ({ features }) => {
  if (!Array.isArray(features) || features.length === 0) return null;

  return (
    <div className="mt-6">
      <h4 className="font-semibold text-white">Features & amenities</h4>
      <div className="mt-3 flex flex-wrap items-center gap-6">
        {features.map((f, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className={`${f.icon ?? ""} text-[20px]`} aria-hidden />
            <span className="text-sm text-white/90">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesList;
