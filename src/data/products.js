let products = [
  {
    id: 1,
    name: "Laptop",
    description: "High performance laptop",
    price: 12000000,
    stock: 15,
    category: "Electronics",
    isAvailable: true,
    createdAt: "2024-01-01T10:00:00Z"
  },
  {
    id: 2,
    name: "Mouse",
    description: "Wireless mouse",
    price: 250000,
    stock: 50,
    category: "Electronics",
    isAvailable: true,
    createdAt: "2024-01-02T11:00:00Z"
  },
  {
    id: 3,
    name: "Notebook",
    description: "A4 size notebook",
    price: 30000,
    stock: 100,
    category: "Stationery",
    isAvailable: true,
    createdAt: "2024-01-03T12:00:00Z"
  }
];

let nextProductId = 4;

module.exports = { products, nextProductId };