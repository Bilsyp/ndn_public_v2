// src/components/CardGrid.js
"use client";
import YouTubeCard from "@/components/ui/youtubeCard";
import React from "react";
const CardGrid = () => {
  const titles = [
    "Video Title 1",
    "Video Title 2",
    "Video Title 3",
    "Video Title 4",
    "Video Title 5",
    "Video Title 6",
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {titles.map((title, index) => (
          <YouTubeCard key={index} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
