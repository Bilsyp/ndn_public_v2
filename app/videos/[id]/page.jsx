// pages/video/[id].js
"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Activity, Play } from "lucide-react";
import ShakaPlayer from "@/components/ShakaPlayer";
import AnalyticsDashboard from "@/components/analytics/analyticsDashboard";

const VideoDetail = () => {
  const [activeTab, setActiveTab] = useState("player");
  const [videoId, setVideoId] = useState(null);

  // Cek apakah ID sudah ada di URL dan set videoId setelah komponen di-render

  return (
    <div className="w-full">
      <Card className=" mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Video Player</span>
            <Badge variant="outline" className="h-6">
              <Activity className="w-4 h-4 mr-2" />
              Live Stats
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="player"
            className="space-y-4"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList>
              <TabsTrigger value="player">Player</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <div style={{ display: activeTab === "player" ? "block" : "none" }}>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <ShakaPlayer />
              </div>
            </div>

            <div
              style={{ display: activeTab === "analytics" ? "block" : "none" }}
            >
              <div className="w-full border rounded-lg">
                <AnalyticsDashboard />
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoDetail;
