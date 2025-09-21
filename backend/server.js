const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student_db'
});

// GET all students
app.get('/api/students', (req, res) => {
  db.query('SELECT * FROM students ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// POST new student
app.post('/api/students', (req, res) => {
  const { name, roll_no, class: studentClass } = req.body;
  db.query('INSERT INTO students (name, roll_no, class) VALUES (?, ?, ?)', 
    [name, roll_no, studentClass], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, name, roll_no, class: studentClass });
  });
});

// PUT update student
app.put('/api/students/:id', (req, res) => {
  const { name, roll_no, class: studentClass } = req.body;
  db.query('UPDATE students SET name = ?, roll_no = ?, class = ? WHERE id = ?',
    [name, roll_no, studentClass, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Student updated' });
  });
});

// DELETE student
app.delete('/api/students/:id', (req, res) => {
  db.query('DELETE FROM students WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Student deleted' });
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));