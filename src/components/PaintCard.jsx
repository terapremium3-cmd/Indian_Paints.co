import React from 'react';

const PaintCard = ({ image, title, description, features }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 w-full max-w-sm bg-white">
      <img
        src={image}
        alt={title}
        className="w-full h-auto max-h-48 object-contain mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default PaintCard;
