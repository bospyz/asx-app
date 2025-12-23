"use client";
import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => cursor.classList.add("cursor-active");
    const handleMouseLeave = () => cursor.classList.remove("cursor-active");

    window.addEventListener("mousemove", moveCursor);
    
    // Ищем все интерактивные элементы
    const interactives = document.querySelectorAll('a, button, .group');
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="cursor-follower hidden md:block" />;
};