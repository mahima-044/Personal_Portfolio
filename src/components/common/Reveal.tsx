import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const Reveal: React.FC<RevealProps> = ({ children, className = "", delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-12";
      case "down":
        return "-translate-y-12";
      case "left":
        return "translate-x-12";
      case "right":
        return "-translate-x-12";
      default:
        return "translate-y-12";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${getTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
