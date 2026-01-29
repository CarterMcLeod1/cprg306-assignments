"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(e) {
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
      <label style={{ display: "block", marginBottom: 10 }}>
        Item Name
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
          placeholder="e.g., Apples"
        />
      </label>

      <label style={{ display: "block", marginBottom: 10 }}>
        Quantity
        <input
          type="number"
          min="1"
          max="99"
          required
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
        />
      </label>

      <label style={{ display: "block", marginBottom: 14 }}>
        Category
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ display: "block", width: "100%", padding: 8, marginTop: 6 }}
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </label>

      <button type="submit" style={{ padding: "10px 14px" }}>
        Add Item
      </button>
    </form>
  );
}
