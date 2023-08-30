import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const params = useParams()
    console.log(params.id);
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
    const handleEdit = () => {
        console.log(input)
        setInput({ name: "", email: "" })
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
                <button onClick={handleEdit} className='btn btn-warning mt-3 fw-bold'>Edit user</button>
            </Link>

        </div>
    )
}

export default EditUser