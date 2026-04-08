import React, { useState, useEffect } from 'react';
import './SkillBar.css';

export const SkillBar = ({ name, level, color, delay }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setWidth(level), delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div 
          className="skill-fill" 
          style={{ 
            width: `${width}%`, 
            background: color,
            boxShadow: `0 0 6px ${color}40`
          }}
        />
      </div>
    </div>
  );
};