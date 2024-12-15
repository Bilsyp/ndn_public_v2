"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useNetworkStore from "@/stores/networkStore";
export function InputWithButton() {
  const { networkType, setNetworkType } = useNetworkStore();

  return (
    <div className="flex w-full gap-3 flex-col max-w-sm ">
      <label htmlFor="net" className="block">
        Please Insert The Url
      </label>
      <div>
        <Input
          type="text"
          id="net"
          className="my-3"
          placeholder={`${networkType == "ndn" ? "ndn://url" : "http://"}`}
        />
        <Button type="submit">Load</Button>
      </div>
    </div>
  );
}
