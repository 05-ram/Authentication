import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LOGIN_URL } from "../../config"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const handleSubmit = () => {
        axios.post(LOGIN_URL, {
            email, password
        }).then(response => {
            if (response) {
                navigate('/dashboard')
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" value={email} required onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" value={password} required onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className="registerbtn">Login</button>
                <button type="submit" className="outlinebtn">
                    <Link to='/signup'>
                        Sign Up
                    </Link>
                </button>
            </form>
        </div>
    )
}

export default Login