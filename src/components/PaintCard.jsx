import React from "react";

const PaintCard = ({ image, title, description, features }) => {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md hover:shadow-lg transition p-4 w-72 flex flex-col">
      <div className="h-40 flex items-center justify-center bg-white rounded-lg mb-4">
        <img src={image} alt={title} className="max-h-full object-contain" />
      </div>
      <h3 className="font-bold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      {features && (
        <ul className="text-gray-700 text-sm list-disc pl-5 mb-2">
          {features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaintCard;
