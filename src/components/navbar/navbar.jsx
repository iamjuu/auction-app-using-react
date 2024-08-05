// src/ui/floating-navbar.jsx
import React from "react";

export function FloatingNav({ navItems }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around p-4 bg-gray-800 text-white">
      {navItems.map((item) => (
        <a key={item.name} href={item.link} className="flex items-center space-x-2">
          {item.icon}
          <span>{item.name}</span>
        </a>
      ))}
    </nav>
  );
}
