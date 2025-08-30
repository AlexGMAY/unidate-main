'use client';

import React, { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    // Create initial hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 8,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prev => {
        if (prev.length >= 25) return prev;
        
        return [
          ...prev,
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: 100 + Math.random() * 20,
            size: Math.random() * 10 + 5,
            duration: Math.random() * 15 + 15,
            delay: 0,
          }
        ];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-pink-400 opacity-70"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animation: `floatUp ${heart.duration}s ease-in ${heart.delay}s infinite`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes floatUp {
          0% {
            opacity: 0.7;
            transform: translate(-50%, 0) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -100vh) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;