import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteStudent = () => {
  const { roll } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/students?roll=${roll}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const studentId = data[0].id;

          fetch(`http://localhost:3001/students/${studentId}`, {
            method: 'DELETE'
          })
            .then(() => {
              alert('Student deleted successfully');
              navigate('/');
            })
            .catch((err) => console.error('Error deleting student:', err));
        } else {
          alert('Student not found');
          navigate('/');
        }
      })
      .catch((err) => console.error('Error finding student:', err));
  }, [roll, navigate]);

  return (
    <div className="container mt-5 text-center">
      <h4>Deleting student...</h4>
    </div>
  );
};

export default DeleteStudent;
