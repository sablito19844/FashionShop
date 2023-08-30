import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from './UserSlice'
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        email: ""
    })
    const handleChange = (e) => {
        /* const newInput = { ...input }
        newInput[e.target.name] = e.target.value
        setInput(newInput) */
        setInput({ ...input, [e.target.name]: e.target.value })
        /* console.log(input); */
    }
    const handleSubmit = () => {
        console.log(input)
        setInput({ name: "", email: "" })
        dispatch((addUser({
            id:uuidv4(),
            name:input.name,
            email:input.email
        })))
    }
    return (
        <div className='container mt-3'>
            <div>
                <label>Name:</label>
                <input
                    className='form-control'
                    placeholder='Enter name'
                    onChange={handleChange}
                    name="name"
                    value={input.name}
                />
            </div>
            <br />
            <div>
                <label>Email:</label>
                <input
                    className='form-control'
                    placeholder='Enter email'
                    onChange={handleChange}
                    name="email"
                    value={input.email}
                />
            </div>
            <Link to="/">
                <button onClick={handleSubmit} className='btn btn-warning mt-3 fw-bold'>Submit</button>
            </Link>

        </div>
    )
}

export default AddUser