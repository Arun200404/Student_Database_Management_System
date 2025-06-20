import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CreateStudent from './components/CreateStudent'
import StudentTable from './components/StudentTable'
import EditStudent from './components/EditStudent'
import ViewStudent from './components/ViewStudent'
import DeleteStudent from './components/DeleteStudent'
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/Table" element={<StudentTable/>} />
        <Route path="/create" element={<CreateStudent/>} />
        <Route path="/edit/:roll" element={<EditStudent/>} />
        <Route path="/view/:roll" element={<ViewStudent/>} />
        <Route path="/delete/:roll" element={<DeleteStudent/>} />
      </Routes>
      
    </div>
  )
}

export default App