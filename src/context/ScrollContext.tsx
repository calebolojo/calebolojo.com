import { useEffect, useState, createContext, useContext } from 'react';
import Lenis from 'lenis';

const SmoothScrollerContext = createContext(null);

export const useSmoothScroller = () => useContext(SmoothScrollerContext);

export default function ScrollContext({ children }: any) {
  const [lenisRef, setLenis] = useState<any>(null);
  const [rafState, setRaf] = useState<any>(null);

  useEffect(() => {
    const scroller = new Lenis();
    let rf;

    function raf(time: any) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroller);

    return () => {
      if (lenisRef) {
        cancelAnimationFrame(rafState);
        lenisRef.destroy();
      }
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollerContext.Provider>
  );
}
