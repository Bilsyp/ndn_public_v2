"use client";

import { ComboboxDemo } from "@/components/ui/combbox";
import useResolutionStore from "@/stores/resolutionStore";

const resolutionOptions = [
  {
    value: "360p",
    label: "360p",
  },
  {
    value: "480p",
    label: "480p",
  },
  {
    value: "720p",
    label: "720p",
  },
  {
    value: "1080p",
    label: "1080p",
  },
  {
    value: "1440p",
    label: "1440p (2K)",
  },
  {
    value: "2160p",
    label: "2160p (4K)",
  },
];

const ResolutionState = () => {
  const setResolution = useResolutionStore((state) => state.setResolution);

  return (
    <>
      <ComboboxDemo
        options={resolutionOptions}
        setOptions={setResolution}
        placeholder="Pilih resolusi..."
        searchPlaceholder="Cari resolusi..."
        width="w-[200px]"
        emptyMessage="Resolusi tidak ditemukan."
        label="Resolusi Video (Default 360p)"
      />
    </>
  );
};

export default ResolutionState;
