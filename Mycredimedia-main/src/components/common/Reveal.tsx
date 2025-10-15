import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

const Reveal = ({ children, className = "" }: RevealProps) => {
  return (
    <div className={`animate-fade-in-up ${className}`}>
      {children}
    </div>
  );
};

export default Reveal;