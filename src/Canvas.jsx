import React, { useEffect, useRef } from "react";

export default function Canvas(props) {
  const toRadians = (angle) => angle * (Math.PI / 180);

  const aX = 0;
  const aY = 0;
  const bX = aX + props.sideA;
  const bY = aY;
  const cX = () => {
    if (props.angleB < 90) {
      return bX - props.sideC * Math.sin(toRadians(90 - props.angleB));
    }
    return bX + props.sideC * Math.sin(-1 * toRadians(90 - props.angleB));
  };
  const cY = () => {
    if (props.angleB < 90) {
      return bY + props.sideC * Math.cos(toRadians(90 - props.angleB));
    }
    return bY + props.sideC * Math.cos(-1 * toRadians(90 - props.angleB));
  };

  const canvasRef = useRef(null);

  const calculateMultiplier = () => {
    const calculateLargestDistance = (x1, y1, x2, y2) => {
      const x = x1 - x2;
      const y = y1 - y2;

      return Math.sqrt(x * x + y * y);
    };

    const distanceAToB = calculateLargestDistance(aX, aY, bX, bY);
    const distanceAToC = calculateLargestDistance(aX, aY, cX(), cY());
    const distanceBToC = calculateLargestDistance(bX, bY, cX(), cY());

    let largestDistance = 0;

    if (distanceAToB > largestDistance) largestDistance = distanceAToB;
    if (distanceAToC > largestDistance) largestDistance = distanceAToC;
    if (distanceBToC > largestDistance) largestDistance = distanceBToC;

    return 400 / largestDistance;
  };

  useEffect(() => {
    const multiplier = calculateMultiplier();

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(aX, aY);
    context.lineTo(bX * multiplier, bY * multiplier);
    context.lineTo(cX() * multiplier, cY() * multiplier);
    context.closePath();
    context.stroke();
  }, []);

  return (
    <div className="canvasContainer">
      <canvas width="400" height="400" ref={canvasRef} />
    </div>
  );
}
