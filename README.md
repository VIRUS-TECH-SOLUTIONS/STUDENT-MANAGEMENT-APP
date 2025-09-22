# Student Management System

A full-stack web application built for educational purposes, demonstrating CRUD operations for student record management with modern web technologies.

## 🚀 Tech Stack

- **Frontend**: React.js, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Architecture**: RESTful API

## ✨ Features

- ✅ Create, read, update, and delete student records
- 📱 Responsive design for all devices
- 🎨 Clean, intuitive user interface
- 👤 Student roll number validation
- 📝 Form validation and error handling
- 🔍 Student list with search functionality

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/student-management-system.git
   cd student-management-system
   ```

2. **Database Setup**
   ```sql
   CREATE DATABASE student_db;
   USE student_db;
   
   CREATE TABLE students (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     roll_no VARCHAR(20) UNIQUE NOT NULL,
     class VARCHAR(20) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

3. **Environment Configuration**
   Create `.env` file in the backend directory:
   ```env
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=student_db
   PORT=5000
   ```

4. **Install Dependencies**
   ```bash
   # Install all dependencies (root, backend, frontend)
   npm install
   ```

5. **Start Development Servers**
   ```bash
   # Run both frontend and backend concurrently
   npm run dev
   ```
   
   **Or run individually:**
   
   **Terminal 1 - Backend Server:**
   ```bash
   cd backend
   npm run dev
   ```
   Backend runs on: http://localhost:5000
   
   **Terminal 2 - Frontend Server:**
   ```bash
   cd frontend
   npm start
   ```
   Frontend runs on: http://localhost:3000

## 📁 Project Structure

```
student-management-system/
├── backend/
│   ├── server.js          # Express server
│   ├── database.sql       # Database schema
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main React component
│   │   ├── App.css        # Styling
│   │   └── index.js       # Entry point
│   └── package.json
├── package.json           # Root package for concurrent dev
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/students` | Get all students |
| POST | `/api/students` | Create new student |
| PUT | `/api/students/:id` | Update student |
| DELETE | `/api/students/:id` | Delete student |

## 🎯 Learning Objectives

This project helps students understand:
- Full-stack development workflow
- RESTful API design principles
- Database integration with MySQL
- React component architecture
- CRUD operations implementation
- Frontend-backend communication

## 📸 Screenshots
![Student Management Dashboard](screenshots/dashboard.png)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created for educational purposes to demonstrate modern web development practices.

**Contact:** info@virustechsolutions.com  
**Project Link:** https://github.com/VIRUS-TECH-SOLUTIONS/STUDENT-MANAGEMENT-APP