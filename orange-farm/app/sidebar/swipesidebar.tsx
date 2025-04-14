"use client"

import { div } from "framer-motion/client";

import { motion, useAnimation, } from "framer-motion";
import { useEffect } from "react";
import Sidebar from "./sidebar";

export default function SwipeSidebar() {
  const controls = useAnimation();

  // Detect left swipe
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e:any) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e:any) => {
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
      className="fixed h-full top-0 right-0 w-full bg-white p-4 z-50"
      variants={sidebarVariants}
      initial="closed"
      animate={controls}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <Sidebar/>
    </motion.div>
  );
}




// import Image from "next/image";
// import logo from "../icons/Logo.svg"
// import searchicon from "../icons/search.svg"
// import dashboardIcon from"../icons/dashboard-icon.svg"
// import Button from "../components/button";
// import Data from "../components/ButtonData";
// import gustavo from "../../public/icons/Gustavo.png"
// import settings from "../../public/icons/settings.svg"
// import logout from "../../public/icons/logout.svg"
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';



// export default function Sidebar() {
//   return (
//     <div className="bg-white h-full rounded-2xl p-6 px-14 relative">
        
//         {/* Brand logo */}
//         <div className="flex justify-between items-center">
//           <Image src={logo} alt="Orange-farm-logo" width={100} height={100} priority className="w-40 hidden" />

//           <div className="bg-offwhite hidden rounded-l-xl absolute right-0 p-1 ">
//             <NavigateBeforeIcon/>
//           </div>
//         </div>
//     </div>
//   );
// } 