"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
const Header = ({ title, description }) => {
  return (
    <header className="flex items-center justify-center h-screen bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.4,
              damping: 8,
            }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Memahami Jaringan Data dengan Mudah
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              x: 100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.3,
              delay: 0.2,
            }}
            className="mt-4 max-w-[700px] text-muted-foreground sm:text-xl"
          >
            Pelajari dasar-dasar jaringan data dan bagaimana teknologi ini
            mendukung koneksi global. Mulai eksplorasi dan tingkatkan pemahaman
            Anda tentang dunia digital.
          </motion.p>
          <Button className="mt-6">Explore</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
