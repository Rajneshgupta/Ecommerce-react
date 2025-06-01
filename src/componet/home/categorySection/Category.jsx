import React from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
     const categories = [
    {
      name: "Top Deals",
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
    },
    {
      name: "Smartphones Tablets",
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
    },
    {
      name: "Smart TVs Appliances",
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
    },
    {
      name: "Laptops Electronics",
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100",
    },
    {
      name: "Audio Airphones",
      image: "fashion.png", // Replace with a relevant audio icon
    },
    {
      name: "Wearables Gadgets",
      image: "beauty-food.png", // Replace with smartwatch icon
    },
    {
      name: "Smart Devices",
      image: "home-kitchen.png", // Replace with smart home icon
    },
    {
      name: "Computer Accessories",
      image: "furniture.png", // Replace with accessories image
    },
    {
      name: "Tech Travel Gear",
      image: "travel.png", // Power banks, chargers etc.
    },
    {
      name: "Digital Essentials",
      image: "grocery.png", // Cables, memory cards, adapters
    },
  ];
  return (
    <div>
         <div className="category-wrapper">
                <div className="category-grid-10">
                  {categories.map((cat, index) => (
                    <Link>
                    <div className="category-item" key={index}>
                      {/* <div className="category-icon">
                        <img src={`/images/${cat.image}`} alt={cat.name} />
                      </div> */}
                      <div className="category-label">{cat.name}</div>
                    </div>
                    </Link>
                  ))}
                </div>
              </div>
    </div>
  )
}

export default Category