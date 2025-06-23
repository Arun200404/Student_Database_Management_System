import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const StudentTable = () => {

    const [students, setStudents] = useState([]);
    const [view, setView] = useState("card");
    console.log(students);

    useEffect(() => {
        fetch('http://localhost:3001/students')
            .then((res) => res.json())
            .then((data) => setStudents(data))
            .catch((err) => console.error('Error fetching student data:', err));
    }, []);

    return (
        <div>
            <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="fw-bold">Student Database</h2>
                    <div>
                        <Link to="/create" className="btn btn-primary me-2">
                            Add Student
                        </Link>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => setView(view === "card" ? "table" : "card")}
                        >
                            {view === "card" ? "Table View" : "Card View"}
                        </button>
                    </div>
                </div>

                {view === "card" ? (
                    <div className="row">
                        {students.map((student) => (
                            <div className="col-md-4 mb-4" key={student.roll}>
                                <div className="card shadow h-100">
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-primary">{student.name}</h5>
                                        <p className="card-text mb-1">
                                            <strong>Roll:</strong> {student.roll}
                                        </p>
                                        <p className="card-text mb-1">
                                            <strong>Place:</strong> {student.place}
                                        </p>
                                        <p className="card-text mb-3">
                                            <strong>Phone:</strong> {student.pno}
                                        </p>
                                        <div className="mt-auto">
                                            <div className="d-flex gap-2">
                                                <Link
                                                    to={`/view/${student.roll}`}
                                                    className="btn btn-lg btn-info text-white flex-fill"
                                                >
                                                    View
                                                </Link>
                                                <Link
                                                    to={`/edit/${student.roll}`}
                                                    className="btn btn-lg btn-warning flex-fill"
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    to={`/delete/${student.roll}`}
                                                    className="btn btn-lg btn-danger flex-fill"
                                                >
                                                    Delete
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {students.length === 0 && (
                            <div className="col-12">
                                <div className="alert alert-info text-center">
                                    No students found.
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div>
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
                                {students.map((student) => (
                                    <tr key={student.roll}>
                                        <td>{student.roll}</td>
                                        <td>{student.name}</td>
                                        <td>{student.place}</td>
                                        <td>{student.pno}</td>
                                        <td>
                                            <Link
                                                to={`/view/${student.roll}`}
                                                className="btn btn-info btn-sm"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                to={`/edit/${student.roll}`}
                                                className="btn btn-warning btn-sm ms-2"
                                            >
                                                Edit
                                            </Link>
                                            <Link
                                                to={`/delete/${student.roll}`}
                                                className="btn btn-danger btn-sm ms-2"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {students.length === 0 && (
                                    <tr>
                                        <td colSpan={5} className="text-center">
                                            No students found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>


        </div>
    )
}

export default StudentTable
