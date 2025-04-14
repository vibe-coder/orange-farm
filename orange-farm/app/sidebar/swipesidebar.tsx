"use client"

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function SwipeSidebar() {
  const controls = useAnimation();

  // Detect left swipe
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX - touchEndX;

      if (swipeDistance > 100) {
        controls.start("open");
      } else if (swipeDistance < -100) {
        controls.start("closed");
      }
    };

    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [controls]);

  const sidebarVariants = {
    closed: { x: "100%" },
    open: { x: 0 },
  };

  return (
    <motion.div
      className="fixed top-0 right-0 h-full w-64 bg-gray-800 text-white p-4 z-50"
      variants={sidebarVariants}
      initial="closed"
      animate={controls}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <p>This sidebar slides in when you swipe left 👈</p>
    </motion.div>
  );
}