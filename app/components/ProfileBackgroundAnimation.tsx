import React from 'react';

interface NeuralNetworkBackgroundProps {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}

const NeuralNetworkBackground: React.FC<NeuralNetworkBackgroundProps> = ({
  className = "",
  size = 400,
  color = "#3B82F6",
  opacity = 1
}) => {
  const viewBoxSize = Math.min(size, 280);
  
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
      <div className="w-full h-full scale-125" style={{ opacity }}>
        <svg 
          className="w-full h-full" 
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central node - main hub */}
          <circle cx={viewBoxSize/2} cy={viewBoxSize/2} r="8" fill={color}>
            <animate attributeName="opacity" values="1;0.6;1" dur="3s" repeatCount="indefinite" />
          </circle>
          
          {/* Primary ring nodes */}
          <circle cx={viewBoxSize*0.32} cy={viewBoxSize*0.32} r="6" fill={color} opacity="0.8">
            <animate attributeName="cx" values={`${viewBoxSize*0.32};${viewBoxSize*0.30};${viewBoxSize*0.34};${viewBoxSize*0.32}`} dur="7s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.32};${viewBoxSize*0.34};${viewBoxSize*0.30};${viewBoxSize*0.32}`} dur="6s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.21} cy={viewBoxSize*0.50} r="6" fill={color} opacity="0.8">
            <animate attributeName="cx" values={`${viewBoxSize*0.21};${viewBoxSize*0.20};${viewBoxSize*0.23};${viewBoxSize*0.21}`} dur="8s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.50};${viewBoxSize*0.52};${viewBoxSize*0.48};${viewBoxSize*0.50}`} dur="6.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.32} cy={viewBoxSize*0.68} r="6" fill={color} opacity="0.8">
            <animate attributeName="cx" values={`${viewBoxSize*0.32};${viewBoxSize*0.34};${viewBoxSize*0.30};${viewBoxSize*0.32}`} dur="7.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.68};${viewBoxSize*0.66};${viewBoxSize*0.70};${viewBoxSize*0.68}`} dur="6.8s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.68} cy={viewBoxSize*0.32} r="6" fill={color} opacity="0.8">
            <animate attributeName="cx" values={`${viewBoxSize*0.68};${viewBoxSize*0.70};${viewBoxSize*0.66};${viewBoxSize*0.68}`} dur="8.2s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.32};${viewBoxSize*0.30};${viewBoxSize*0.34};${viewBoxSize*0.32}`} dur="7.2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.79} cy={viewBoxSize*0.50} r="6" fill={color} opacity="0.8">
            <animate attributeName="cx" values={`${viewBoxSize*0.79};${viewBoxSize*0.80};${viewBoxSize*0.77};${viewBoxSize*0.79}`} dur="7.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.50};${viewBoxSize*0.52};${viewBoxSize*0.48};${viewBoxSize*0.50}`} dur="8.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.68} cy={viewBoxSize*0.68} r="6" fill={color} opacity="0.8">
            <animate attributeName="cx" values={`${viewBoxSize*0.68};${viewBoxSize*0.66};${viewBoxSize*0.70};${viewBoxSize*0.68}`} dur="8.8s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.68};${viewBoxSize*0.70};${viewBoxSize*0.66};${viewBoxSize*0.68}`} dur="7.5s" repeatCount="indefinite" />
          </circle>
          
          {/* Outer ring nodes */}
          <circle cx={viewBoxSize*0.39} cy={viewBoxSize*0.18} r="4" fill={color} opacity="0.6">
            <animate attributeName="cx" values={`${viewBoxSize*0.39};${viewBoxSize*0.41};${viewBoxSize*0.37};${viewBoxSize*0.39}`} dur="9s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.18};${viewBoxSize*0.20};${viewBoxSize*0.16};${viewBoxSize*0.18}`} dur="8s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.61} cy={viewBoxSize*0.18} r="4" fill={color} opacity="0.6">
            <animate attributeName="cx" values={`${viewBoxSize*0.61};${viewBoxSize*0.59};${viewBoxSize*0.63};${viewBoxSize*0.61}`} dur="8.3s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.18};${viewBoxSize*0.16};${viewBoxSize*0.20};${viewBoxSize*0.18}`} dur="7.3s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.14} cy={viewBoxSize*0.39} r="4" fill={color} opacity="0.6">
            <animate attributeName="cx" values={`${viewBoxSize*0.14};${viewBoxSize*0.16};${viewBoxSize*0.12};${viewBoxSize*0.14}`} dur="7.6s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.39};${viewBoxSize*0.37};${viewBoxSize*0.41};${viewBoxSize*0.39}`} dur="8.6s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.14} cy={viewBoxSize*0.61} r="4" fill={color} opacity="0.6">
            <animate attributeName="cx" values={`${viewBoxSize*0.14};${viewBoxSize*0.12};${viewBoxSize*0.16};${viewBoxSize*0.14}`} dur="8.9s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.61};${viewBoxSize*0.63};${viewBoxSize*0.59};${viewBoxSize*0.61}`} dur="7.9s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.39} cy={viewBoxSize*0.82} r="4" fill={color} opacity="0.6">
            <animate attributeName="cx" values={`${viewBoxSize*0.39};${viewBoxSize*0.37};${viewBoxSize*0.41};${viewBoxSize*0.39}`} dur="9.2s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.82};${viewBoxSize*0.84};${viewBoxSize*0.80};${viewBoxSize*0.82}`} dur="8.2s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.61} cy={viewBoxSize*0.82} r="4" fill={color} opacity="0.6">
            <animate attributeName="cx" values={`${viewBoxSize*0.61};${viewBoxSize*0.63};${viewBoxSize*0.59};${viewBoxSize*0.61}`} dur="8.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.82};${viewBoxSize*0.80};${viewBoxSize*0.84};${viewBoxSize*0.82}`} dur="9.5s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.86} cy={viewBoxSize*0.39} r="4" fill={color} opacity="0.6">
            <animate attributeName="cx" values={`${viewBoxSize*0.86};${viewBoxSize*0.88};${viewBoxSize*0.84};${viewBoxSize*0.86}`} dur="7.2s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.39};${viewBoxSize*0.41};${viewBoxSize*0.37};${viewBoxSize*0.39}`} dur="8.7s" repeatCount="indefinite" />
          </circle>
          
          <circle cx={viewBoxSize*0.86} cy={viewBoxSize*0.61} r="4" fill={color} opacity="0.6">
            <animate attributeName="cx" values={`${viewBoxSize*0.86};${viewBoxSize*0.84};${viewBoxSize*0.88};${viewBoxSize*0.86}`} dur="9.7s" repeatCount="indefinite" />
            <animate attributeName="cy" values={`${viewBoxSize*0.61};${viewBoxSize*0.59};${viewBoxSize*0.63};${viewBoxSize*0.61}`} dur="8.1s" repeatCount="indefinite" />
          </circle>
          
          {/* Neural Network Connections - Central connections */}
          <line stroke={color} strokeWidth="1" opacity="0.5">
            <animate attributeName="x1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.32};${viewBoxSize*0.30};${viewBoxSize*0.34};${viewBoxSize*0.32}`} dur="7s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.32};${viewBoxSize*0.34};${viewBoxSize*0.30};${viewBoxSize*0.32}`} dur="6s" repeatCount="indefinite" />
          </line>
          
          <line stroke={color} strokeWidth="1" opacity="0.5">
            <animate attributeName="x1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.21};${viewBoxSize*0.20};${viewBoxSize*0.23};${viewBoxSize*0.21}`} dur="8s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.50};${viewBoxSize*0.52};${viewBoxSize*0.48};${viewBoxSize*0.50}`} dur="6.5s" repeatCount="indefinite" />
          </line>
          
          <line stroke={color} strokeWidth="1" opacity="0.5">
            <animate attributeName="x1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.32};${viewBoxSize*0.34};${viewBoxSize*0.30};${viewBoxSize*0.32}`} dur="7.5s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.68};${viewBoxSize*0.66};${viewBoxSize*0.70};${viewBoxSize*0.68}`} dur="6.8s" repeatCount="indefinite" />
          </line>
          
          <line stroke={color} strokeWidth="1" opacity="0.5">
            <animate attributeName="x1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.68};${viewBoxSize*0.70};${viewBoxSize*0.66};${viewBoxSize*0.68}`} dur="8.2s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.32};${viewBoxSize*0.30};${viewBoxSize*0.34};${viewBoxSize*0.32}`} dur="7.2s" repeatCount="indefinite" />
          </line>
          
          <line stroke={color} strokeWidth="1" opacity="0.5">
            <animate attributeName="x1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.79};${viewBoxSize*0.80};${viewBoxSize*0.77};${viewBoxSize*0.79}`} dur="7.8s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.50};${viewBoxSize*0.52};${viewBoxSize*0.48};${viewBoxSize*0.50}`} dur="8.5s" repeatCount="indefinite" />
          </line>
          
          <line stroke={color} strokeWidth="1" opacity="0.5">
            <animate attributeName="x1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2};${viewBoxSize/2}`} dur="1s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.68};${viewBoxSize*0.66};${viewBoxSize*0.70};${viewBoxSize*0.68}`} dur="8.8s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.68};${viewBoxSize*0.70};${viewBoxSize*0.66};${viewBoxSize*0.68}`} dur="7.5s" repeatCount="indefinite" />
          </line>
          
          {/* Secondary connections */}
          <line stroke={color} strokeWidth="1" opacity="0.4">
            <animate attributeName="x1" values={`${viewBoxSize*0.32};${viewBoxSize*0.30};${viewBoxSize*0.34};${viewBoxSize*0.32}`} dur="7s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize*0.32};${viewBoxSize*0.34};${viewBoxSize*0.30};${viewBoxSize*0.32}`} dur="6s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.39};${viewBoxSize*0.41};${viewBoxSize*0.37};${viewBoxSize*0.39}`} dur="9s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.18};${viewBoxSize*0.20};${viewBoxSize*0.16};${viewBoxSize*0.18}`} dur="8s" repeatCount="indefinite" />
          </line>
          
          <line stroke={color} strokeWidth="1" opacity="0.4">
            <animate attributeName="x1" values={`${viewBoxSize*0.32};${viewBoxSize*0.30};${viewBoxSize*0.34};${viewBoxSize*0.32}`} dur="7s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize*0.32};${viewBoxSize*0.34};${viewBoxSize*0.30};${viewBoxSize*0.32}`} dur="6s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.14};${viewBoxSize*0.16};${viewBoxSize*0.12};${viewBoxSize*0.14}`} dur="7.6s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.39};${viewBoxSize*0.37};${viewBoxSize*0.41};${viewBoxSize*0.39}`} dur="8.6s" repeatCount="indefinite" />
          </line>
          
          {/* Outer ring connections */}
          <line stroke={color} strokeWidth="1" opacity="0.3">
            <animate attributeName="x1" values={`${viewBoxSize*0.39};${viewBoxSize*0.41};${viewBoxSize*0.37};${viewBoxSize*0.39}`} dur="9s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize*0.18};${viewBoxSize*0.20};${viewBoxSize*0.16};${viewBoxSize*0.18}`} dur="8s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.61};${viewBoxSize*0.59};${viewBoxSize*0.63};${viewBoxSize*0.61}`} dur="8.3s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.18};${viewBoxSize*0.16};${viewBoxSize*0.20};${viewBoxSize*0.18}`} dur="7.3s" repeatCount="indefinite" />
          </line>
          
          <line stroke={color} strokeWidth="1" opacity="0.3">
            <animate attributeName="x1" values={`${viewBoxSize*0.14};${viewBoxSize*0.16};${viewBoxSize*0.12};${viewBoxSize*0.14}`} dur="7.6s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize*0.39};${viewBoxSize*0.37};${viewBoxSize*0.41};${viewBoxSize*0.39}`} dur="8.6s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.14};${viewBoxSize*0.12};${viewBoxSize*0.16};${viewBoxSize*0.14}`} dur="8.9s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.61};${viewBoxSize*0.63};${viewBoxSize*0.59};${viewBoxSize*0.61}`} dur="7.9s" repeatCount="indefinite" />
          </line>
          
          {/* Right side connections */}
          <line stroke={color} strokeWidth="1" opacity="0.3">
            <animate attributeName="x1" values={`${viewBoxSize*0.68};${viewBoxSize*0.70};${viewBoxSize*0.66};${viewBoxSize*0.68}`} dur="8.2s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize*0.32};${viewBoxSize*0.30};${viewBoxSize*0.34};${viewBoxSize*0.32}`} dur="7.2s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.86};${viewBoxSize*0.88};${viewBoxSize*0.84};${viewBoxSize*0.86}`} dur="7.2s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.39};${viewBoxSize*0.41};${viewBoxSize*0.37};${viewBoxSize*0.39}`} dur="8.7s" repeatCount="indefinite" />
          </line>
          
          <line stroke={color} strokeWidth="1" opacity="0.3">
            <animate attributeName="x1" values={`${viewBoxSize*0.68};${viewBoxSize*0.66};${viewBoxSize*0.70};${viewBoxSize*0.68}`} dur="8.8s" repeatCount="indefinite" />
            <animate attributeName="y1" values={`${viewBoxSize*0.68};${viewBoxSize*0.70};${viewBoxSize*0.66};${viewBoxSize*0.68}`} dur="7.5s" repeatCount="indefinite" />
            <animate attributeName="x2" values={`${viewBoxSize*0.61};${viewBoxSize*0.63};${viewBoxSize*0.59};${viewBoxSize*0.61}`} dur="8.5s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${viewBoxSize*0.82};${viewBoxSize*0.80};${viewBoxSize*0.84};${viewBoxSize*0.82}`} dur="9.5s" repeatCount="indefinite" />
          </line>
          
          {/* Animated Pulse Effect */}
          <circle cx={viewBoxSize/2} cy={viewBoxSize/2} r="8" fill="transparent" stroke={color} opacity="0.3">
            <animate attributeName="r" from="10" to={viewBoxSize*0.32} dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.3" to="0" dur="3s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default NeuralNetworkBackground;