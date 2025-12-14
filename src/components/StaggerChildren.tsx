import { Children, cloneElement, isValidElement, ReactElement } from "react";
import { FadeIn } from "./FadeIn";

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerChildren({ 
  children, 
  staggerDelay = 100,
  className = "" 
}: StaggerChildrenProps) {
  const childArray = Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <FadeIn key={index} delay={index * staggerDelay}>
          {child}
        </FadeIn>
      ))}
    </div>
  );
}
