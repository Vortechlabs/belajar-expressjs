const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../middleware/validator');
const { apiKeyAuth, checkRole } = require('../middleware/auth');

// Public routes
router.get('/', userController.getAllUsers);
router.get('/search', userController.searchUsers);
router.get('/:id', userController.getUserById);

// Protected routes (require API key)
router.post('/', apiKeyAuth, validateUser, userController.createUser);
router.put('/:id', apiKeyAuth, validateUser, userController.updateUser);
router.delete('/:id', apiKeyAuth, userController.deleteUser);

// Admin only routes
router.post('/admin/bulk', apiKeyAuth, checkRole(['admin']), (req, res) => {
  res.json({
    success: true,
    message: "Admin bulk operation endpoint"
  });
});

module.exports = router;