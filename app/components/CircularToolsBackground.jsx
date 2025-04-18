"use client";

import { useEffect, useRef } from 'react';

const CircularToolsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Design tools to display
    const designTools = [
      { name: "Photoshop", color: "#31A8FF" },
      { name: "Illustrator", color: "#FF9A00" },
      { name: "InDesign", color: "#FF3366" },
      { name: "Figma", color: "#A259FF" },
      { name: "XD", color: "#FF61F6" },
      { name: "Sketch", color: "#F7B500" },
      { name: "After Effects", color: "#9999FF" },
      { name: "Premiere Pro", color: "#9999FF" },
      { name: "Blender", color: "#E87D0D" },
      { name: "Canva", color: "#00C4CC" },
    ];
    
    // Set canvas dimensions to match the container
    const updateCanvasSize = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Calculate positions for the circular arrangement
    const calculatePositions = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.8; // 80% of the available space
      
      // Calculate positions in a circle
      return designTools.map((tool, index) => {
        const angle = (index / designTools.length) * Math.PI * 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        return {
          ...tool,
          x,
          y,
          angle,
          radius: 30, // Size of tool circle
          startAngle: angle,
        };
      });
    };
    
    let toolsWithPositions = calculatePositions();
    let rotationAngle = 0;
    const rotationSpeed = 0.002; // Speed of rotation
    
    // Animation function
    function animate() {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update rotation angle
      rotationAngle += rotationSpeed;
      
      // Draw tools around the circle
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const pathRadius = Math.min(centerX, centerY) * 0.8;
      
      toolsWithPositions.forEach((tool) => {
        // Update position based on rotation
        const newAngle = tool.startAngle + rotationAngle;
        const x = centerX + pathRadius * Math.cos(newAngle);
        const y = centerY + pathRadius * Math.sin(newAngle);
        
        // Draw tool circle
        ctx.beginPath();
        ctx.arc(x, y, tool.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${tool.color}80`; // 50% opacity
        ctx.fill();
        
        // Draw tool name
        ctx.font = '12px Arial';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tool.name, x, y);
      });
      
      requestAnimationFrame(animate);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      updateCanvasSize();
      toolsWithPositions = calculatePositions();
    });

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

export default CircularToolsBackground;