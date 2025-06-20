import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateStudent = () => {
    const [student, setStudent] = useState({
        name: '',
        roll: '',
        place: '',
        pno: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/students', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        })
            .then(() => {
                alert('Student added successfully');
                navigate('/');
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="mb-4 text-center">Add New Student</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Student Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={student.name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Roll Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="roll"
                            value={student.roll}
                            onChange={handleChange}
                            placeholder="Enter roll number"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Place</label>
                        <input
                            type="text"
                            className="form-control"
                            name="place"
                            value={student.place}
                            onChange={handleChange}
                            placeholder="Enter place"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="pno"
                            value={student.pno}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            required
                            pattern="[0-9]{10}"
                        />
                        <small className="text-muted">Enter a 10-digit number</small>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-success px-4">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateStudent;
