const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const categoryRoutes = require('./categoryRoutes');

// API Documentation
router.get('/', (req, res) => {
  res.json({
    message: "🚀 Express.js CRUD Practice API",
    version: "1.0.0",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      categories: "/api/categories"
    },
    documentation: "Visit /api-docs for detailed API documentation"
  });
});

// API Documentation HTML
router.get('/api-docs', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Express CRUD API Documentation</title>
      <style>
        body { font-family: Arial; padding: 20px; }
        .endpoint { background: #f0f0f0; padding: 15px; margin: 10px 0; }
        .method { padding: 5px 10px; border-radius: 3px; color: white; }
        .get { background: #4CAF50; }
        .post { background: #2196F3; }
        .put { background: #FF9800; }
        .delete { background: #F44336; }
      </style>
    </head>
    <body>
      <h1>📚 API Documentation</h1>
      
      <h2>👤 Users API</h2>
      <div class="endpoint">
        <span class="method get">GET</span> /api/users - Get all users
      </div>
      <div class="endpoint">
        <span class="method get">GET</span> /api/users/search?name=... - Search users
      </div>
      <div class="endpoint">
        <span class="method post">POST</span> /api/users - Create user (requires API key)
      </div>
      
      <h2>🛒 Products API</h2>
      <div class="endpoint">
        <span class="method get">GET</span> /api/products - Get all products
      </div>
      <div class="endpoint">
        <span class="method get">GET</span> /api/products/category/:category - Get by category
      </div>
      <div class="endpoint">
        <span class="method post">POST</span> /api/products - Create product
      </div>
      
      <h2>📂 Categories API</h2>
      <div class="endpoint">
        <span class="method get">GET</span> /api/categories - Get all categories
      </div>
      
      <h3>🔐 Authentication</h3>
      <p>Untuk endpoint protected, tambahkan header: <code>x-api-key: secret123</code></p>
    </body>
    </html>
  `);
});

// Mount routes
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;