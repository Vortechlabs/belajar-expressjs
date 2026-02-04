const { products, nextProductId } = require('../data/products');

// GET all products
const getAllProducts = (req, res) => {
  res.json({
    success: true,
    count: products.length,
    data: products
  });
};

// GET product by ID
const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({
      success: false,
      error: "Product not found"
    });
  }
  
  res.json({
    success: true,
    data: product
  });
};

// CREATE new product
const createProduct = (req, res) => {
  const { name, description, price, stock, category } = req.body;
  
  const newProduct = {
    id: nextProductId++,
    name,
    description: description || "",
    price: parseFloat(price),
    stock: parseInt(stock),
    category: category || "Uncategorized",
    isAvailable: true,
    createdAt: new Date().toISOString()
  };
  
  products.push(newProduct);
  
  res.status(201).json({
    success: true,
    message: "Product created successfully",
    data: newProduct
  });
};

// UPDATE product
const updateProduct = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description, price, stock, category, isAvailable } = req.body;
  
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Product not found"
    });
  }
  
  products[productIndex] = {
    ...products[productIndex],
    name: name || products[productIndex].name,
    description: description || products[productIndex].description,
    price: price !== undefined ? parseFloat(price) : products[productIndex].price,
    stock: stock !== undefined ? parseInt(stock) : products[productIndex].stock,
    category: category || products[productIndex].category,
    isAvailable: isAvailable !== undefined ? isAvailable : products[productIndex].isAvailable
  };
  
  res.json({
    success: true,
    message: "Product updated successfully",
    data: products[productIndex]
  });
};

// DELETE product
const deleteProduct = (req, res) => {
  const id = parseInt(req.params.id);
  
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "Product not found"
    });
  }
  
  const deletedProduct = products.splice(productIndex, 1)[0];
  
  res.json({
    success: true,
    message: "Product deleted successfully",
    data: deletedProduct
  });
};

// GET products by category
const getProductsByCategory = (req, res) => {
  const category = req.params.category;
  const categoryProducts = products.filter(p => 
    p.category.toLowerCase() === category.toLowerCase()
  );
  
  res.json({
    success: true,
    category,
    count: categoryProducts.length,
    data: categoryProducts
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory
};