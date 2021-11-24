import React, { useEffect, useRef } from 'react';

export default function Canvas(props) {
  const toRadians = (angle) => angle * (Math.PI / 180);

  const aX = 25;
  const aY = 25;
  const bX = aX + props.sideA;
  const bY = aY;
  const cX = () => {
    if (props.angleBeta < 90) {
      return bX - props.sideB * Math.sin(toRadians(90 - props.angleBeta));
    }
    return bX + props.sideB * Math.sin(-1 * toRadians(90 - props.angleBeta));
  };
  const cY = () => {
    if (props.angleBeta < 90) {
      return bY + props.sideB * Math.cos(toRadians(90 - props.angleBeta));
    }
    return bY + props.sideB * Math.cos(-1 * toRadians(90 - props.angleBeta));
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.moveTo(aX, aY);
    context.lineTo(bX, bY);
    context.lineTo(cX(), cY());
    context.fill();
  }, []);

  return <canvas width={10000} height={10000} ref={canvasRef} />;
}
