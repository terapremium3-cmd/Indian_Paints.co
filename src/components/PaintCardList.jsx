import React from 'react';
import PaintCard from './PaintCard';

// Example placeholder image
const sampleImage = 'src/assets/IMG-20180325-WA0007.jpg';

const PaintCardList = () => {
  const cards = [
    {
      image: sampleImage,
      title: 'Interior Paints',
      description: 'Premium emulsions for beautiful interiors',
      features: [
        'Washable & Durable',
        'Low VOC Formula',
        '1000+ Color Options',
        'Easy Application',
      ],
    },
    {
      image: sampleImage,
      title: 'Exterior Paints',
      description: 'Weatherproof paints for lasting beauty',
      features: [
        'UV Resistant',
        'Waterproof Protection',
        'Anti-Fungal Coating',
        'Vibrant Shades',
      ],
    },
    {
      image: sampleImage,
      title: 'Wood Coatings',
      description: 'Protect and enhance your wooden surfaces',
      features: [
        'Smooth Finish',
        'Stain Resistant',
        'Quick Dry Formula',
        'Long Lasting Shine',
      ],
    },
  ];

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cards.map((card, index) => (
          <PaintCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
};

export default PaintCardList;
