"use client";
import useAbrStore from "@/stores/abrStore";
import { ComboboxDemo } from "@/components/ui/combbox";
const AbrState = () => {
  const { abrType, setAbrType } = useAbrStore();

  const optionsAbrAlgoritm = [
    {
      value: "throughput",
      label: "Throughput-Based ABR",
    },
    {
      value: "buffer",
      label: "Buffer-Based ABR",
    },
    {
      value: "hybrid",
      label: "Hybrid ABR",
    },
    {
      value: "qoe",
      label: "QoE-Based ABR",
    },
    {
      value: "reinforcement",
      label: "Reinforcement Learning ABR",
    },
  ];
  return (
    <ComboboxDemo
      options={optionsAbrAlgoritm}
      setOptions={setAbrType}
      placeholder="Select ABR Algorithm..."
      searchPlaceholder="Search ABR algorithm..."
      width="w-[250px]"
      label="ABR Algorithm"
    />
  );
};

export default AbrState;
