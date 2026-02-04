// Simulasi autentikasi sederhana
const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'] || req.query.api_key;
  
  // Simulasi API key valid
  const validApiKeys = ['secret123', 'myapikey456', 'test789'];
  
  if (!apiKey) {
    return res.status(401).json({
      success: false,
      error: "API key is required",
      message: "Tambahkan header 'x-api-key' dengan API key valid"
    });
  }
  
  if (!validApiKeys.includes(apiKey)) {
    return res.status(403).json({
      success: false,
      error: "Invalid API key",
      message: "API key tidak valid"
    });
  }
  
  // Simpan info user (dummy) untuk request selanjutnya
  req.user = {
    id: 1,
    name: "Admin User",
    role: "admin"
  };
  
  console.log(`API Key auth successful for user: ${req.user.name}`);
  next();
};

// Middleware untuk cek role
const checkRole = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: "User not authenticated"
      });
    }
    
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: "Access denied",
        message: `Role ${req.user.role} tidak memiliki akses`
      });
    }
    
    next();
  };
};

module.exports = { apiKeyAuth, checkRole };