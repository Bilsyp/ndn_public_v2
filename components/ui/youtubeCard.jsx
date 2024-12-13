// src/components/YouTubeCard.js

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "./button";
Card;
const YouTubeCard = ({ title }) => {
  return (
    <Card className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
      </CardHeader>
      <CardContent className="p-4">
        <img
          src="https://via.placeholder.com/300x200" // Placeholder image
          alt="Thumbnail"
          className="w-full h-auto rounded-md"
        />
        <Button className="w-full my-3">Play</Button>
      </CardContent>
    </Card>
  );
};

export default YouTubeCard;
