"use client";
import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DynamicChart from "../charts/DynamicChart";
import useStatsStore from "@/stores/statsStore";

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const stats = useStatsStore((state) => state.stats);

  const chartConfigs = [
    {
      title: "Bandwidth Stream",
      dataKey: "streamBandwidth",
      color: "#8884d8",
    },
    {
      title: "Decoded Frames",
      dataKey: "decodedFrames",
      color: "#82ca9d",
    },
    {
      title: "Buffering Time",
      dataKey: "bufferingTime",
      color: "#ffc658",
    },
    {
      title: "Dropped Frames",
      dataKey: "droppedFrames",
      color: "#ff7300",
    },
  ];

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const formatChartData = (statKey) => {
    return stats[statKey].map((value, index) => ({
      timestamp: new Date(
        Date.now() - (stats[statKey].length - 1 - index) * 1000
      ).toISOString(),
      value: Number(value) || 0,
    }));
  };

  return (
    <div className="mx-auto w-full">
      <Carousel setApi={setApi} className="w-[80%] mx-auto">
        <CarouselContent>
          {chartConfigs.map((config, index) => (
            <CarouselItem key={index}>
              <Card>
                <DynamicChart
                  data={formatChartData(config.dataKey)}
                  title={config.title}
                  dataKey="value"
                  color={config.color}
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current || 1} of {count || chartConfigs.length}
      </div>
    </div>
  );
}
