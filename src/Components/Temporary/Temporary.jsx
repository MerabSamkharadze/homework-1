import React from "react";

const obj = {
  id: "10002",
  name: "Eco-Friendly Water Bottle",
  description: "Stay hydrated with our durable, eco-friendly water bottle.",
  price: 14.99,
  currency: "USD",
  imageURL: "https://example.com/images/product-10002.jpg",
};

export default function Temporary() {
  const list = Object.keys(obj).reduce((acc, key, index) => {
    acc.push(
      <tr key={key}>
        <td>{key}</td>
        <td>{obj[key]}</td>
        <td>{index}</td>
      </tr>
    );
    return acc;
  }, []);

  return (
    <div>
      <h1>Object Data Table</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
}
