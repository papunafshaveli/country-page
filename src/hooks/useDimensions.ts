import { useEffect, useRef } from "react";
import { Dimensions, getDimensions } from "../helpers/dimensions";

export const useDimensions = () => {
  const dimensions = useRef<Dimensions>(getDimensions());

  useEffect(() => {
    const handleResize = () => {
      dimensions.current = getDimensions();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions.current]);

  return dimensions.current;
};
