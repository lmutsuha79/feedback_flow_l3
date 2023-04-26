import React, { useEffect, useRef } from "react";
import p5 from "p5";

const ShearedRectangles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let canvas, ctx;

    const shearAngle = -Math.PI * 0.125;
    const count = 10;
    const w = 50;
    const h = 50;
    const gap = 12;
    let totalWidth = count * w + (count - 1) * gap;
    let halfWidth = totalWidth * 0.5;
    let halfHeight = h * 0.5;

    const setup = (p5) => {
      canvas = p5.createCanvas(window.innerWidth, window.innerHeight);
      ctx = canvas.drawingContext;
    };

    const draw = (p5) => {
      p5.background(0);
      p5.stroke(255);
      p5.noFill();
      p5.translate(p5.width * 0.5 - halfWidth, p5.height * 0.5);
      p5.shearX(shearAngle);

      let time = Date.now() * 0.005;
      for (let i = 0; i < count; i++) {
        let t = i / count;
        let s = Math.sin((time - t * p5.QUARTER_PI * 3) % p5.TAU);
        let weight = p5.map(s, -1, 1, 2, 8);
        let x = t * totalWidth;
        let y = s * 8 - halfHeight;
        p5.strokeWeight(weight);
        p5.rect(x, y, w, h);
      }
    };

    const windowResized = (p5) => {
      p5.resizeCanvas(window.innerWidth, window.innerHeight);
    };

    new p5((p5) => {
      p5.setup = () => setup(p5);
      p5.draw = () => draw(p5);
      p5.windowResized = () => windowResized(p5);
    }, canvasRef.current);

    return () => {
      canvas.remove();
    };
  }, []);

  return <div ref={canvasRef} />;
};

export default ShearedRectangles;
