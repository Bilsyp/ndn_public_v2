"use client";
import "shaka-player/dist/controls.css";
import { useRef, useState, useEffect } from "react";
import { init, loadVideo } from "@/lib/shaka-player";
import { Button } from "./ui/button";
import useNetworkStore from "@/stores/networkStore";
import shaka from "shaka-player";
import useStatsStore from "@/stores/statsStore";
const ShakaPlayer = () => {
  const videoElement = useRef(null);
  const videoContainerElement = useRef(null);
  const [player, setPlayer] = useState();
  const { networkType } = useNetworkStore();

  const updateStat = useStatsStore((state) => state.updateStat);

  useEffect(() => {
    init({ shaka, videoElement, videoContainerElement, setPlayer });
  }, []);

  const handleTime = () => {
    const stat = player?.getStats();
    if (stat) {
      updateStat("streamBandwidth", Number(stat.streamBandwidth) || 0);
      updateStat("decodedFrames", Number(stat.decodedFrames) || 0);
      updateStat("droppedFrames", Number(stat.droppedFrames) || 0);
      updateStat("bufferingTime", Number(stat.bufferingTime) || 0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (player) {
        handleTime();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [player]);

  return (
    <div>
      <div
        ref={videoContainerElement}
        className="max-w-[1280px] w-full aspect-video mx-auto"
      >
        <video
          controls
          onTimeUpdate={() => {
            handleTime();
          }}
          width={600}
          height={400}
          className=" border-slate-900 rounded-md shadow-md border-2"
          ref={videoElement}
          id="video"
        ></video>
      </div>
      <Button className="mt-3" onClick={() => loadVideo({ player })}>
        Play {networkType}
      </Button>
    </div>
  );
};

export default ShakaPlayer;
