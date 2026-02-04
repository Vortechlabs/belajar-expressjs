const express = require('express');
const router = express.Router();
const { categories, nextCategoryId } = require('../data/categories');

// GET all categories
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: categories.length,
    data: categories
  });
});

// GET category by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const category = categories.find(c => c.id === id);
  
  if (!category) {
    return res.status(404).json({
      success: false,
      error: "Category not found"
    });
  }
  
  res.json({
    success: true,
    data: category
  });
});

// CREATE new category
router.post('/', (req, res) => {
  const { name, description } = req.body;
  
  if (!name) {
    return res.status(400).json({
      success: false,
      error: "Category name is required"
    });
  }
  
  const newCategory = {
    id: nextCategoryId++,
    name,
    description: description || "",
    productCount: 0,
    isActive: true
  };
  
  categories.push(newCategory);
  
  res.status(201).json({
    success: true,
    message: "Category created successfully",
    data: newCategory
  });
});

module.exports = router;