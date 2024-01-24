import React, { useEffect, useRef } from 'react';

const StaticCanvasDots = ({ screenWidth, screenHeight, isMobile }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = screenWidth;
        canvas.height = screenHeight;

        const colorDot = 'blue';
        const lineWidth = .2;
        const distance = isMobile ? 60 : 90;
        const minRadius = 1.9;
        const dots = [];

        // Generate static dots
        const nb = isMobile ? 400 : 300;
        for (let i = 0; i < nb; i++) {
            const x = Math.random() * screenWidth;
            const y = Math.random() * screenHeight;
            dots.push({ x, y });
        }

        // Draw dots
        ctx.fillStyle = colorDot;
        dots.forEach(dot => {
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, minRadius, 0, Math.PI * 2, false);
            ctx.fill();
        });

        // Draw lines between dots
        ctx.strokeStyle = `rgba(72, 141, 199, 1)`; // Adjust the color and opacity as needed
        ctx.lineWidth = lineWidth;
        for (let i = 0; i < nb; i++) {
            for (let j = i + 1; j < nb; j++) {
                const dot1 = dots[i];
                const dot2 = dots[j];
                const distanceBetweenDots = Math.sqrt((dot1.x - dot2.x) ** 2 + (dot1

                    .y - dot2.y) ** 2);
                if (distanceBetweenDots < distance) {
                    ctx.beginPath();
                    ctx.moveTo(dot1.x, dot1.y);
                    ctx.lineTo(dot2.x, dot2.y);
                    ctx.stroke();
                }
            }
        }

    }, [screenWidth, screenHeight, isMobile]);


    return <canvas ref={canvasRef} className="connecting-dots"></canvas>;
};

export default StaticCanvasDots;

