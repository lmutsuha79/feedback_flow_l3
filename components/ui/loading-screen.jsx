import { useEffect } from "react";
import { TimelineMax, TweenMax } from "gsap";
import ShearedRectangles from "./sheared-rectangles ";

const LoadingScreen = () => {
 
  return (
    <div className="bg-black w-screen h-screen fixed top-0 left-0 z-[99]">
      <ShearedRectangles />
    </div>
  );
};

export default LoadingScreen;
