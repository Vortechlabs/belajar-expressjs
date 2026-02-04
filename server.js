const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import middleware
const logger = require('./src/middleware/logger');
const { errorHandler, notFoundHandler } = require('./src/middleware/errorHandler');

// Import routes
const apiRoutes = require('./src/routes');

// Middleware global
app.use(express.json()); // Parse JSON
app.use(express.urlencoded({ extended: true }));
app.use(logger); // Custom logging middleware

// Welcome route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Express.js CRUD Practice</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 40px;
          text-align: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          min-height: 100vh;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.1);
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }
        h1 { font-size: 3em; margin-bottom: 10px; }
        .endpoint-list {
          text-align: left;
          background: rgba(255, 255, 255, 0.2);
          padding: 20px;
          border-radius: 10px;
          margin: 20px 0;
        }
        .method {
          display: inline-block;
          padding: 5px 10px;
          border-radius: 5px;
          margin-right: 10px;
          font-weight: bold;
          min-width: 60px;
          text-align: center;
        }
        .get { background: #4CAF50; }
        .post { background: #2196F3; }
        .put { background: #FF9800; }
        .delete { background: #F44336; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Express.js CRUD Practice</h1>
        <p>Struktur folder lengkap dengan middleware dan routing modular</p>
        
        <div class="endpoint-list">
          <h3>📡 Available Endpoints:</h3>
          
          <div style="margin: 15px 0;">
            <span class="method get">GET</span>
            <strong><a href="/api" style="color: white;">/api</a></strong> - API Documentation
          </div>
          
          <div style="margin: 15px 0;">
            <span class="method get">GET</span>
            <strong><a href="/api/users" style="color: white;">/api/users</a></strong> - Get all users
          </div>
          
          <div style="margin: 15px 0;">
            <span class="method get">GET</span>
            <strong>/api/products</strong> - Get all products
          </div>
          
          <div style="margin: 15px 0;">
            <span class="method get">GET</span>
            <strong>/api/categories</strong> - Get all categories
          </div>
        </div>
        
        <h3>🛠️ Tools untuk testing:</h3>
        <p>Gunakan <strong>Postman</strong>, <strong>curl</strong>, atau <strong>Thunder Client</strong> (VS Code)</p>
        
        <h3>🔐 Testing Authentication:</h3>
        <p>Untuk POST/PUT/DELETE, tambahkan header:</p>
        <code style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: 5px;">
          x-api-key: secret123
        </code>
      </div>
    </body>
    </html>
  `);
});

// Mount API routes
app.use('/api', apiRoutes);

// Error handling middleware
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log("=".repeat(60));
  console.log("🚀 EXPRESS.JS CRUD PRACTICE SERVER");
  console.log("=".repeat(60));
  console.log(`🌐 Server running on: http://localhost:${PORT}`);
  console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
  console.log("");
  console.log("📁 Struktur Project:");
  console.log("  📂 src/");
  console.log("    ├── controllers/    # Business logic");
  console.log("    ├── routes/         # Route definitions");
  console.log("    ├── middleware/     # Custom middleware");
  console.log("    ├── data/          # In-memory databases");
  console.log("    └── utils/         # Helper functions");
  console.log("");
  console.log("🛠️  CRUD Endpoints:");
  console.log("");
  console.log("👤 USERS:");
  console.log("  GET    /api/users           - Get all users");
  console.log("  GET    /api/users/:id       - Get user by ID");
  console.log("  POST   /api/users           - Create user (requires API key)");
  console.log("  PUT    /api/users/:id       - Update user");
  console.log("  DELETE /api/users/:id       - Delete user");
  console.log("");
  console.log("🛒 PRODUCTS:");
  console.log("  GET    /api/products        - Get all products");
  console.log("  GET    /api/products/:id    - Get product by ID");
  console.log("  POST   /api/products        - Create product");
  console.log("  PUT    /api/products/:id    - Update product");
  console.log("  DELETE /api/products/:id    - Delete product");
  console.log("");
  console.log("📂 CATEGORIES:");
  console.log("  GET    /api/categories      - Get all categories");
  console.log("  POST   /api/categories      - Create category");
  console.log("");
  console.log("🔐 Authentication:");
  console.log("  API Key: secret123, myapikey456, test789");
  console.log("  Header: x-api-key: secret123");
  console.log("=".repeat(60));
});