import './Measure.css';
import { useEffect, useRef, useState } from 'react';


interface MeasureProps {
  children: React.ReactNode;
  outline?: boolean;
}

export function Measure({
  children,
  outline = true,
}: MeasureProps) {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;

      setDimension({
        width: +width.toFixed(2),
        height: +height.toFixed(2),
      });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="measure-card"
      data-dimension={`width: ${dimension.width}px | height: ${dimension.height}px`}
      data-is-show-dimension={outline}
      style={{
        outline: outline ? '1px dashed red' : 'none',
      }}
    >
      {children}
    </div>
  );
}