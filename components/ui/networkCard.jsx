"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import useNetworkStore from "@/stores/networkStore";
import { Badge } from "@/components/ui/badge";
import { Wifi } from "lucide-react";

export function NetworkCard() {
  const { networkType } = useNetworkStore();
  const [mounted, setMounted] = useState(false);
  const [networkInfo, setNetworkInfo] = useState({
    online: false,
    effectiveType: "unknown",
    downlink: 0,
    rtt: 0,
  });

  useEffect(() => {
    setMounted(true);
    // Set initial network info
    setNetworkInfo({
      online: navigator.onLine,
      effectiveType: navigator.connection?.effectiveType || "unknown",
      downlink: navigator.connection?.downlink || 0,
      rtt: navigator.connection?.rtt || 0,
    });

    // Event listeners untuk status online/offline
    const handleOnline = () =>
      setNetworkInfo((prev) => ({ ...prev, online: true }));
    const handleOffline = () =>
      setNetworkInfo((prev) => ({ ...prev, online: false }));

    // Fungsi untuk update informasi jaringan
    const updateNetworkInfo = () => {
      if ("connection" in navigator) {
        const connection = navigator.connection;
        setNetworkInfo({
          online: navigator.onLine,
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
        });
      }
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if ("connection" in navigator) {
      navigator.connection.addEventListener("change", updateNetworkInfo);
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      if ("connection" in navigator) {
        navigator.connection.removeEventListener("change", updateNetworkInfo);
      }
    };
  }, []);

  // Mencegah render di server
  if (!mounted) {
    return null;
  }

  return (
    <Card className="border-dashed">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm flex items-center gap-2">
            <Wifi className="w-4 h-4" />
            Network Information
          </CardTitle>
          <Badge
            variant={networkInfo.online ? "success" : "destructive"}
            className="h-6"
          >
            {networkInfo.online ? "Online" : "Offline"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <div className="text-sm font-medium">Tipe Jaringan:</div>
          <div className="text-sm">{networkType}</div>

          <div className="text-sm font-medium">Tipe Koneksi:</div>
          <div className="text-sm">{networkInfo.effectiveType}</div>

          <div className="text-sm font-medium">Kecepatan Download:</div>
          <div className="text-sm">{networkInfo.downlink} Mbps</div>

          <div className="text-sm font-medium">Latency (RTT):</div>
          <div className="text-sm">{networkInfo.rtt} ms</div>
        </div>
      </CardContent>
    </Card>
  );
}
