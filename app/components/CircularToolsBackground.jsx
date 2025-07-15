"use client";

import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from './ThemeProvider';

const CircularToolsBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const { actualTheme } = useTheme();

  // Memoize draw function to prevent recreating on every render
  const draw = useCallback(() => {
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
      if (!container) return;
      
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      ctx.scale(dpr, dpr);
    };
    
    updateCanvasSize();
    
    // Calculate positions for the circular arrangement
    const toolsWithPositions = designTools.map((tool, index) => {
      const angle = (index / designTools.length) * Math.PI * 2;
      
      return {
        ...tool,
        startAngle: angle,
        radius: 30, // Size of tool circle
      };
    });
    
    let rotationAngle = 0;
    const rotationSpeed = 0.0005; // Slower for better performance
    
    // Get text color based on theme
    const textColor = actualTheme === 'dark' ? '#e5e7eb' : '#374151';
    const bgOpacity = actualTheme === 'dark' ? '40' : '60';
    
    // Animation function
    function animate() {
      const centerX = canvas.width / (2 * (window.devicePixelRatio || 1));
      const centerY = canvas.height / (2 * (window.devicePixelRatio || 1));
      const pathRadius = Math.min(centerX, centerY) * 0.8;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update rotation angle
      rotationAngle += rotationSpeed;
      
      // Draw tools around the circle
      toolsWithPositions.forEach((tool) => {
        // Update position based on rotation
        const newAngle = tool.startAngle + rotationAngle;
        const x = centerX + pathRadius * Math.cos(newAngle);
        const y = centerY + pathRadius * Math.sin(newAngle);
        
        // Draw tool circle with lower opacity for performance
        ctx.beginPath();
        ctx.arc(x, y, tool.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${tool.color}${bgOpacity}`;
        ctx.fill();
        
        // Draw tool name with theme-aware color
        ctx.font = '12px Inter, -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tool.name, x, y);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    }

    // Handle window resize efficiently
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasSize();
    });
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Start the animation
    animate();
    
    // Clean up
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [actualTheme]);

  useEffect(() => {
    const cleanup = draw();
    return cleanup;
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default CircularToolsBackground;