import React, { useState } from "react";

function ProductList() {
  const products = [
    { name: "Notebook", price: 50, category: "Stationery" },
    { name: "Bag", price: 500, category: "Bags" },
    { name: "Pen", price: 10, category: "Stationery" },
    { name: "Headphones", price: 1000, category: "Electronics" },
  ];

  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div>
      <h2>Product List</h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Stationery">Stationery</option>
        <option value="Bags">Bags</option>
        <option value="Electronics">Electronics</option>
      </select>

      <ul>
        {filteredProducts.map((p, i) => (
          <li key={i}>
            {p.name} - ₹{p.price} ({p.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;