import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const ViewStudent = () => {

    const { roll } = useParams();
    // console.log("Roll Number:", roll);

    const [student, setStudent] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/students?roll=${roll}`)
            .then((res) => res.json())
            .then((data) => {
                setStudent(data[0] || {});
                console.log("Student Details:", data);
            })
            .catch((err) => console.error('Error fetching student details:', err));
    }, []);

    return (
        <div>
            <div className="container mt-5">
                <div className="card shadow p-4">
                    <h2 className="mb-4 text-center">View Student Details</h2>
                    <p><strong>Roll Number:</strong> {student.roll}</p>
                    <p><strong>Name:</strong> {student.name}</p>
                    <p><strong>Place:</strong> {student.place}</p>
                    <p><strong>Phone Number:</strong> {student.pno}</p>
                    <div>
                        <Link to="/Table" className="btn btn-danger ">Back</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewStudent