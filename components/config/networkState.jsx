"use client";

import { ComboboxDemo } from "../ui/combbox";
import useNetworkStore from "@/stores/networkStore";
import { NetworkCard } from "../ui/networkCard";

const NetworkState = () => {
  const { networkType, setNetworkType } = useNetworkStore();

  const optionsNetwork = [
    {
      value: "ipv4",
      label: "Ipv4",
    },
    {
      value: "ndn",
      label: "Named Data Network",
    },
  ];
  return (
    <>
      <NetworkCard />
      <br />

      <ComboboxDemo
        options={optionsNetwork}
        setOptions={setNetworkType}
        placeholder="Select Network Type..."
        searchPlaceholder="Search network type..."
        width="w-[250px]"
        label="Network Type"
      />
    </>
  );
};

export default NetworkState;
