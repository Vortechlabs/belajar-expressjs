let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    isActive: true,
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 30,
    isActive: true,
    createdAt: "2024-01-02T11:00:00Z",
    updatedAt: "2024-01-02T11:00:00Z"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    age: 22,
    isActive: false,
    createdAt: "2024-01-03T12:00:00Z",
    updatedAt: "2024-01-03T12:00:00Z"
  }
];

let nextUserId = 4;

module.exports = { users, nextUserId };