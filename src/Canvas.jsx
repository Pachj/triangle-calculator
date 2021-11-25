import React, { useEffect, useRef } from 'react';

export default function Canvas(props) {
  const toRadians = (angle) => angle * (Math.PI / 180);

  const aX = 25;
  const aY = 25;
  const bX = aX + props.sideC;
  const bY = aY;
  const cX = () => {
    if (props.angleB < 90) {
      return bX - props.sideA * Math.sin(toRadians(90 - props.angleB));
    }
    return bX + props.sideA * Math.sin(-1 * toRadians(90 - props.angleB));
  };
  const cY = () => {
    if (props.angleB < 90) {
      return bY + props.sideA * Math.cos(toRadians(90 - props.angleB));
    }
    return bY + props.sideA * Math.cos(-1 * toRadians(90 - props.angleB));
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(aX, aY);
    context.lineTo(bX, bY);
    context.lineTo(cX(), cY());
    context.closePath();
    context.stroke();
  }, []);

  return <canvas width={10000} height={10000} ref={canvasRef} />;
}
