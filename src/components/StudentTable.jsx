import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const StudentTable = () => {

    const [students, setStudents] = useState([]);
    console.log(students);

    useEffect(() => {
    fetch('http://localhost:3001/students')
      .then((res) => res.json())
      .then((data) =>  setStudents(data))
      .catch((err) => console.error('Error fetching student data:', err));
  }, []); 

    return (
        <div>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2>Student Database</h2>
                    <Link to="/create" className="btn btn-primary">Add Student</Link>
                </div>

                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Roll</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone No</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map((student) => (
                                <tr key={student.roll}>
                                    <td>{student.roll}</td>
                                    <td>{student.name}</td>
                                    <td>{student.place}</td>
                                    <td>{student.pno}</td>
                                    <td>
                                        <Link to={`/view/${student.roll}`} className="btn btn-info btn-sm">View</Link>
                                        <Link to={`/edit/${student.roll}`} className="btn btn-warning btn-sm ms-2">Edit</Link>
                                        <Link to={`/delete/${student.roll}`} className="btn btn-danger btn-sm ms-2">Delete</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default StudentTable