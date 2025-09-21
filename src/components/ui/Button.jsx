import React from "react";

export function Button({ children, onClick, className = "", variant = "default", size = "md", ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const finalClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button onClick={onClick} className={finalClass} {...props}>
      {children}
    </button>
  );
}
