"use client";

import { useEffect, useRef } from 'react';

const ProfileBackgroundAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match the container
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Create circles with different properties
    const circles = [];
    const colors = ['#F9A8D4', '#C4B5FD', '#A78BFA', '#DDD6FE', '#E9D5FF'];
    
    // Create circles concentrated in the center
    for (let i = 0; i < 12; i++) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Position circles mostly around the center with some randomness
      const angle = Math.random() * Math.PI * 2; // Random angle
      const distance = Math.random() * canvas.width * 0.4; // Random distance from center
      
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      circles.push({
        x,
        y,
        radius: Math.random() * 30 + 10,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.25 + 0.05,
      });
    }

    // Animation function
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update each circle
      circles.forEach(circle => {
        // Move circle
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Bounce off edges
        if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
          circle.dx = -circle.dx;
        }
        if (circle.y + circle.radius > canvas.height || circle.y - circle.radius < 0) {
          circle.dy = -circle.dy;
        }

        // Draw circle with proper opacity format
        let opacityHex = Math.floor(circle.opacity * 255).toString(16);
        if (opacityHex.length === 1) opacityHex = '0' + opacityHex;
        
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${circle.color}${opacityHex}`;
        ctx.fill();
        
        // Draw a lighter inner circle
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `${circle.color}${Math.floor((circle.opacity + 0.1) * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    // Start the animation
    const animationId = requestAnimationFrame(animate);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ProfileBackgroundAnimation;