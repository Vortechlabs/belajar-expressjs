let categories = [
  {
    id: 1,
    name: "Electronics",
    description: "Electronic devices",
    productCount: 2,
    isActive: true
  },
  {
    id: 2,
    name: "Stationery",
    description: "Office and school supplies",
    productCount: 1,
    isActive: true
  },
  {
    id: 3,
    name: "Books",
    description: "Various books",
    productCount: 0,
    isActive: true
  }
];

let nextCategoryId = 4;

module.exports = { categories, nextCategoryId };