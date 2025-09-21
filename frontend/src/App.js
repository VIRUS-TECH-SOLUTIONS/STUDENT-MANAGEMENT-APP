import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', roll_no: '', class: '' });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:5000/api/students');
    const data = await response.json();
    setStudents(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editing 
      ? `http://localhost:5000/api/students/${editing}`
      : 'http://localhost:5000/api/students';
    
    await fetch(url, {
      method: editing ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    
    setForm({ name: '', roll_no: '', class: '' });
    setEditing(null);
    fetchStudents();
  };

  const handleEdit = (student) => {
    setForm({ name: student.name, roll_no: student.roll_no, class: student.class });
    setEditing(student.id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/students/${id}`, { method: 'DELETE' });
    fetchStudents();
  };

  return (
    <div className="App">
      <h1>Student Management System</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={form.roll_no}
          onChange={(e) => setForm({...form, roll_no: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Class"
          value={form.class}
          onChange={(e) => setForm({...form, class: e.target.value})}
          required
        />
        <button type="submit">{editing ? 'Update' : 'Add'} Student</button>
        {editing && <button type="button" onClick={() => {setEditing(null); setForm({ name: '', roll_no: '', class: '' });}}>Cancel</button>}
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.roll_no}</td>
              <td>{student.class}</td>
              <td>
                <button onClick={() => handleEdit(student)}>Edit</button>
                <button onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
