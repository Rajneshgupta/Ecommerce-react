import React from "react";
import { Link } from "react-router-dom";

// ✅ Import local images
import categoryone from "../../../asset/img/10.jpg";
import categorytwo from "../../../asset/img/1.jpg";
import categorythree from "../../../asset/img/2.jpg";
import categoryfour from "../../../asset/img/3.jpg";
import categoryfive from "../../../asset/img/4.jpg";
import categorysix from "../../../asset/img/5.jpg";
import categoryseven from "../../../asset/img/6.jpg";
import categoryeight from "../../../asset/img/7.jpg";
import categorynine from "../../../asset/img/8.jpg";
import categoryten from "../../../asset/img/9.jpg";

const Category = () => {
  const categories = [
    { name: "Top Deals", image: categoryone },
    { name: "Smartphones Tablets", image: categorytwo },
    { name: "Smart TVs Appliances", image: categorythree },
    { name: "Laptops Electronics", image: categoryfour },
    { name: "Audio Airphones", image: categoryfive },
    { name: "Wearables Gadgets", image: categorysix },
    { name: "Smart Devices", image: categoryseven },
    { name: "Computer Accessories", image: categoryeight },
    { name: "Tech Travel Gear", image: categorynine },
    { name: "Digital Essentials", image: categoryten },
  ];

  return (
    <div className="category-wrapper">
      <div className="category-grid-10">
        {categories.map((cat, index) => (
          <Link to="#" key={index}>
            <div className="category-item">
              <div className="category-icon">
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className="category-label">{cat.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
