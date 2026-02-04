const validateUser = (req, res, next) => {
  const { name, email } = req.body;
  
  if (!name || name.trim() === '') {
    return res.status(400).json({
      success: false,
      error: "Name is required"
    });
  }
  
  if (!email || email.trim() === '') {
    return res.status(400).json({
      success: false,
      error: "Email is required"
    });
  }
  
  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: "Invalid email format"
    });
  }
  
  next();
};

const validateProduct = (req, res, next) => {
  const { name, price, stock } = req.body;
  
  if (!name || name.trim() === '') {
    return res.status(400).json({
      success: false,
      error: "Product name is required"
    });
  }
  
  if (price === undefined || price < 0) {
    return res.status(400).json({
      success: false,
      error: "Valid price is required"
    });
  }
  
  if (stock === undefined || stock < 0) {
    return res.status(400).json({
      success: false,
      error: "Valid stock is required"
    });
  }
  
  next();
};

module.exports = { validateUser, validateProduct };