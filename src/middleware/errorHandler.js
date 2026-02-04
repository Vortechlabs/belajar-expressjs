const errorHandler = (err, req, res, next) => {
  console.error('💥 Error:', err.stack);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    success: false,
    error: {
      message: message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
    message: `${req.method} ${req.originalUrl} tidak ditemukan`
  });
};

module.exports = { errorHandler, notFoundHandler };