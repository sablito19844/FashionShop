import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUser from './features/AddUser'
import EditUser from './features/EditUser'
import UserList from './features/UserList'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/edit-user/:id' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App