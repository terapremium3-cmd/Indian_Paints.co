import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 ${className}`}
      {...props}
    />
  );
}
