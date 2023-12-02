import { useEffect } from "react";

export const useClickOusideHandler = (ref: React.MutableRefObject<any>, isActive: boolean, fun: () => any) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target) && isActive) {
      fun();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  })
}