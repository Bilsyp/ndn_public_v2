import React from "react";
import { motion } from "framer-motion";
import NetworkState from "./networkState";
import AbrState from "./abrState";
import UrlState from "./urlState";
import BufferState from "./bufferState";
import ResolutionState from "./resolutionState";

const VideoConfiguration = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8, // Delay antara setiap child element
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50, // Mulai dari 50px ke kiri
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      className="mt-20 p-10 h-full w-full flex justify-center items-stretch flex-col gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <NetworkState />
      </motion.div>
      <motion.div variants={itemVariants}>
        <AbrState />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ResolutionState />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BufferState />
      </motion.div>

      <motion.div variants={itemVariants}>
        <UrlState />
      </motion.div>
    </motion.div>
  );
};

export default VideoConfiguration;
