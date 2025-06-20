import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {

    const [student, setStudent] = useState({
        name: '',
        roll: '',
        place: '',
        pno: ''
    });

    const navigate = useNavigate();
    const { roll } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/students?roll=${roll}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setStudent(data[0]); 
                } else {
                    alert("Student not found");
                    navigate('/');
                }
            })
            .catch((err) => console.error('Error fetching student details:', err));
    }, [roll, navigate]);

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/students/${student.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(student)
        })
            .then(() => {
                alert('Student details updated successfully');
                navigate('/');
            })
            .catch((err) => console.error('Error updating student:', err));
    };

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="mb-4 text-center">Update Student</h2>
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
                            readOnly
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
                        <button type="submit" className="btn btn-success px-4">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditStudent;
