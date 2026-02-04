# Express.js CRUD Practice

Sebuah project untuk belajar dan berlatih Express.js dengan struktur modular yang lengkap. Project ini mencakup implementasi CRUD operations, middleware, routing, dan error handling menggunakan in-memory database.

## Struktur Project

```
express-crud-practice/
├── src/
│   ├── controllers/
│   │   ├── userController.js
│   │   ├── productController.js
│   │   └── categoryController.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── productRoutes.js
│   │   ├── categoryRoutes.js
│   │   └── index.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── logger.js
│   │   ├── validator.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   └── helpers.js
│   └── data/
│       ├── users.js
│       ├── products.js
│       └── categories.js
├── server.js
├── package.json
└── README.md
```

## Fitur Utama

- CRUD operations untuk Users, Products, dan Categories
- Middleware untuk logging, validasi, dan autentikasi
- Error handling yang terstruktur
- API key authentication
- Role-based access control
- Query parameters untuk filtering dan searching
- Response format yang konsisten

## Persyaratan

- Node.js (v14 atau lebih baru)
- npm atau yarn

## Instalasi

1. Clone repository ini atau buat folder baru:

```bash
mkdir express-crud-practice
cd express-crud-practice
```

2. Inisialisasi project npm:

```bash
npm init -y
```

3. Install dependencies:

```bash
npm install express
npm install -D nodemon
```

4. Buat struktur folder:

```bash
mkdir -p src/controllers src/routes src/middleware src/utils src/data
```

5. Copy file-file dari project ini ke folder yang sesuai

6. Jalankan server:

```bash
# Development mode dengan auto-restart
npm run dev

# Production mode
npm start
```

## API Endpoints

### Users

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users` | Get all users | No |
| GET | `/api/users/:id` | Get user by ID | No |
| GET | `/api/users/search?name=...&active=...` | Search users | No |
| POST | `/api/users` | Create new user | Yes |
| PUT | `/api/users/:id` | Update user | Yes |
| DELETE | `/api/users/:id` | Delete user | Yes |

### Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get product by ID |
| GET | `/api/products/category/:category` | Get products by category |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/:id` | Get category by ID |
| POST | `/api/categories` | Create new category |

## Authentication

Untuk endpoint yang memerlukan autentikasi (POST, PUT, DELETE di users), tambahkan header berikut:

```
x-api-key: secret123
```

API Key yang valid:
- `secret123`
- `myapikey456`
- `test789`

## Testing dengan Postman

### 1. Setup Collection

Buat collection baru di Postman dengan nama "Express CRUD Practice"

### 2. Environment Variables (Opsional)

Buat environment variable:
- `base_url`: `http://localhost:3000`
- `api_key`: `secret123`

### 3. Contoh Request

**GET All Users:**
```
GET {{base_url}}/api/users
```

**POST Create User:**
```
POST {{base_url}}/api/users
Headers:
  x-api-key: {{api_key}}
  Content-Type: application/json

Body (raw JSON):
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

**Search Users:**
```
GET {{base_url}}/api/users/search?name=john&active=true
```

## Testing dengan curl

### 1. GET Request

```bash
# Get all users
curl http://localhost:3000/api/users

# Get user by ID
curl http://localhost:3000/api/users/1

# Search users
curl "http://localhost:3000/api/users/search?name=john"
```

### 2. POST Request

```bash
# Create new user (with API key)
curl -X POST http://localhost:3000/api/users \
  -H "x-api-key: secret123" \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Johnson","email":"alice@example.com","age":30}'

# Create new product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Laptop","description":"High performance laptop","price":12000000,"stock":10,"category":"Electronics"}'
```

### 3. PUT Request

```bash
# Update user
curl -X PUT http://localhost:3000/api/users/1 \
  -H "x-api-key: secret123" \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated","email":"john.updated@example.com","age":26}'
```

### 4. DELETE Request

```bash
# Delete user
curl -X DELETE http://localhost:3000/api/users/1 \
  -H "x-api-key: secret123"
```

## Middleware yang Diimplementasikan

### 1. Logger Middleware
Mencatat semua request yang masuk ke server termasuk method, URL, dan body (jika ada).

### 2. Validator Middleware
- `validateUser`: Validasi data user (nama, email format)
- `validateProduct`: Validasi data product (nama, harga, stok)

### 3. Authentication Middleware
- `apiKeyAuth`: Memeriksa API key di header atau query parameter
- `checkRole`: Memeriksa role user untuk authorization

### 4. Error Handler Middleware
- `errorHandler`: Menangani semua error yang terjadi di aplikasi
- `notFoundHandler`: Menangani route yang tidak ditemukan

## Data Dummy

Project ini menggunakan in-memory database dengan data awal:

### Users:
- John Doe (john@example.com)
- Jane Smith (jane@example.com)
- Bob Johnson (bob@example.com)

### Products:
- Laptop (Electronics)
- Mouse (Electronics)
- Notebook (Stationery)

### Categories:
- Electronics
- Stationery
- Books

## Response Format

Semua response mengikuti format konsisten:

```json
{
  "success": true,
  "message": "Operation message",
  "count": 0,
  "data": {},
  "error": "Error message (if any)"
}
```

## Error Handling

Server akan mengembalikan status code yang sesuai:

- `200`: Success
- `201`: Created
- `400`: Bad Request (validation error)
- `401`: Unauthorized (missing/invalid API key)
- `403`: Forbidden (no permission)
- `404`: Not Found
- `409`: Conflict (duplicate data)
- `500`: Internal Server Error

## Script NPM

- `npm start`: Menjalankan server di production mode
- `npm run dev`: Menjalankan server di development mode dengan auto-restart

## Pelajaran yang Didapat

Project ini mencakup konsep-konsep penting Express.js:

1. **Routing Modular**: Setiap resource di file route terpisah
2. **Controller Pattern**: Business logic terpisah dari routing
3. **Middleware Pipeline**: Chain of responsibility pattern
4. **Error Handling**: Global dan specific error handlers
5. **Request Validation**: Validasi input sebelum diproses
6. **Authentication & Authorization**: API key dan role-based access
7. **Query Parameters**: Filtering, searching, dan pagination
8. **Response Standardization**: Format response yang konsisten

## Langkah Selanjutnya untuk Pengembangan

Untuk mengembangkan project ini lebih lanjut:

1. **Tambahkan Database**: Ganti in-memory data dengan MongoDB/MySQL/PostgreSQL
2. **Environment Configuration**: Gunakan dotenv untuk environment variables
3. **Testing**: Tambahkan unit test dan integration test
4. **Validation Library**: Gunakan Joi atau express-validator
5. **Documentation**: Buat dokumentasi API dengan Swagger/OpenAPI
6. **Security**: Implementasi JWT, password hashing, rate limiting
7. **Pagination**: Tambahkan pagination untuk list endpoints
8. **File Upload**: Tambahkan endpoint untuk upload file

## Troubleshooting

### Server tidak berjalan
- Pastikan port 3000 tidak sedang digunakan
- Cek error di console dengan `npm run dev`
- Pastikan semua dependencies terinstall

### API key tidak bekerja
- Pastikan header `x-api-key` dikirim
- Gunakan API key yang valid: `secret123`, `myapikey456`, atau `test789`
- Untuk testing, bisa gunakan query parameter: `?api_key=secret123`

### Body request tidak terbaca
- Pastikan header `Content-Type: application/json`
- Pastikan JSON format valid
- Gunakan `express.json()` middleware di server.js

## Lisensi

MIT License - bebas digunakan untuk belajar dan dikembangkan lebih lanjut.
