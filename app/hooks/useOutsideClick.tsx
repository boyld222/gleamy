import { useEffect, useRef } from "react";

export const useOutsideClick = (callback: any) => {
  //Make sure trigger click outside
  const ref = useRef<any>();

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [callback, ref]);

  return ref;
};
