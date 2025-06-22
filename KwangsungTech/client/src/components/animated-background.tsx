import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const shapes: HTMLDivElement[] = [];

    // Create floating 3D shapes
    for (let i = 0; i < 15; i++) {
      const shape = document.createElement('div');
      shape.className = 'floating-shape';
      
      // Random position and size
      const size = Math.random() * 80 + 20;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const rotateSpeed = Math.random() * 2 + 0.5;
      const floatSpeed = Math.random() * 3 + 2;
      
      shape.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        background: linear-gradient(45deg, 
          rgba(34, 197, 94, 0.1), 
          rgba(59, 130, 246, 0.1), 
          rgba(156, 163, 175, 0.1)
        );
        border-radius: ${Math.random() > 0.5 ? '50%' : '20%'};
        backdrop-filter: blur(1px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        animation: 
          float${i} ${floatSpeed}s ease-in-out infinite alternate,
          rotate3d${i} ${rotateSpeed * 4}s linear infinite;
        transform-style: preserve-3d;
        will-change: transform;
      `;

      // Add custom animations
      const floatKeyframes = `
        @keyframes float${i} {
          0% { transform: translateY(0) translateX(0) rotateX(0deg) rotateY(0deg); }
          100% { transform: translateY(-20px) translateX(${Math.random() * 20 - 10}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg); }
        }
      `;
      
      const rotateKeyframes = `
        @keyframes rotate3d${i} {
          0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          33% { transform: rotateX(120deg) rotateY(120deg) rotateZ(120deg); }
          66% { transform: rotateX(240deg) rotateY(240deg) rotateZ(240deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
      `;

      if (!document.getElementById(`float-${i}`)) {
        const style = document.createElement('style');
        style.id = `float-${i}`;
        style.textContent = floatKeyframes + rotateKeyframes;
        document.head.appendChild(style);
      }

      container.appendChild(shape);
      shapes.push(shape);
    }

    return () => {
      shapes.forEach(shape => {
        if (shape.parentNode) {
          shape.parentNode.removeChild(shape);
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        perspective: '1000px',
        perspectiveOrigin: 'center center',
      }}
    />
  );
}