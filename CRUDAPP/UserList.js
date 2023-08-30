import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserList = () => {
    const users = useSelector(store => store.users)
    /*  const users = [
         { id: 1, name: "med", email: "med@gmail.com" },
         { id: 2, name: "saber", email: "saber@gmail.com" }
     ] */
    const handleUser = () => users.map(user =>
        <div key={user.id} className='container text-black shadow bg-info rounded p-2 mx-auto my-3 d-flex align-items-center justify-content-between'>
            <div className=''>
                <h4>{user.name}</h4>
                <span>{user.email}</span>
            </div>

            <div >
                <Link to={`edit-user/${user.id}`}>
                    <svg style={{ cursor: "pointer", color: "black" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-pencil-fill m-3" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                </Link>

                <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>

            </div>

        </div>
    )
    return (
        <>
            <div>
                <Link to='/add-user'>
                    <button className='btn btn-warning fw-bold mx-4 mt-3 shadow '>Add user</button>
                </Link>
            </div>
            <div>
                {users.length ? handleUser() : <span>No users here</span>}
            </div>
        </>
    )
}

export default UserList