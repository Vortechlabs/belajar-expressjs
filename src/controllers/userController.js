const { users, nextUserId } = require('../data/users');

// GET all users
const getAllUsers = (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users
  });
};

// GET user by ID
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      error: "User not found"
    });
  }
  
  res.json({
    success: true,
    data: user
  });
};

// CREATE new user
const createUser = (req, res) => {
  const { name, email, age } = req.body;
  
  // Cek email sudah ada
  const emailExists = users.some(u => u.email === email);
  if (emailExists) {
    return res.status(400).json({
      success: false,
      error: "Email already exists"
    });
  }
  
  const newUser = {
    id: nextUserId++,
    name,
    email,
    age: age || 0,
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
};

// UPDATE user
const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age, isActive } = req.body;
  
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "User not found"
    });
  }
  
  // Update user
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    age: age !== undefined ? age : users[userIndex].age,
    isActive: isActive !== undefined ? isActive : users[userIndex].isActive,
    updatedAt: new Date().toISOString()
  };
  
  res.json({
    success: true,
    message: "User updated successfully",
    data: users[userIndex]
  });
};

// DELETE user
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: "User not found"
    });
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  
  res.json({
    success: true,
    message: "User deleted successfully",
    data: deletedUser
  });
};

// SEARCH users
const searchUsers = (req, res) => {
  const { name, active } = req.query;
  let filteredUsers = [...users];
  
  if (name) {
    filteredUsers = filteredUsers.filter(u => 
      u.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  
  if (active !== undefined) {
    const isActive = active === 'true';
    filteredUsers = filteredUsers.filter(u => u.isActive === isActive);
  }
  
  res.json({
    success: true,
    count: filteredUsers.length,
    data: filteredUsers
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  searchUsers
};