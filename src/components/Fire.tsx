import { useRef, useState, useEffect } from "react";

export function Fire() {
  const fireChars = " ,;+ltgti!lI?/\\|)(1}{][rcvzjftJUOQocxfXhqwWB8&%$#@";
  const maxCharIndex = fireChars.length;
  let firePixelsArray: number[] = [];

  const componentRef = useRef<HTMLElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [fireContent, setFireContent] = useState("");

  useEffect(() => {
    if (componentRef.current) {
      const updateDimensions = () => {
        const { clientWidth, clientHeight } = componentRef.current!;
        setWidth(Math.floor(clientWidth));
        setHeight(Math.floor(clientHeight / 12));
      };

      updateDimensions();
    }
  }, []);

  useEffect(() => {
    if (width > 0 && height > 0) {
      firePixelsArray = Array(width * height).fill(0);
      generateFire();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  function generateFire(): void {
    let fireString = "";

    for (let i = 0; i < width; i++) {
      const index = i + width * (height - 1);
      firePixelsArray[index] = Math.floor(Math.random() * maxCharIndex);
    }

    for (let i = 0; i < width * (height - 1); i++) {
      const below = firePixelsArray[i + width];
      const left = firePixelsArray[i + width - 1] || 0;
      const right = firePixelsArray[i + width + 1] || 0;

      const averageValue = (below + left + right) / 3;
      firePixelsArray[i] = Math.max(averageValue - Math.random() * 2, 0);

      fireString += fireChars[Math.floor(firePixelsArray[i])];
      if (i % width === width - 1) fireString += `\n`;
    }

    setFireContent(fireString);
    setTimeout(generateFire, 50); 
  }

  return (
    <section className="relative w-full h-[400px] " ref={componentRef}>
      <pre className="w-full h-full text-khaki">{fireContent}</pre>
    </section>
  );
}
