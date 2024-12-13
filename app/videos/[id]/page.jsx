// pages/video/[id].js
"use client";

import React, { useState } from "react";
import Container from "@/components/ui/container";
const VideoDetail = () => {
  const [videoId, setVideoId] = useState(null);

  // Cek apakah ID sudah ada di URL dan set videoId setelah komponen di-render

  return (
    <Container title={`Video Detail: ${videoId}`}>
      <p>Menampilkan video dengan ID: {videoId}</p>

      {/* Embed video YouTube berdasarkan ID */}
      <div style={styles.videoFrame}></div>
    </Container>
  );
};

const styles = {
  videoFrame: {
    marginTop: "40px",
    marginBottom: "40px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default VideoDetail;
