import { useState } from "react";
import axios from "axios";
import { REGISTER_URL } from "../../config";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(REGISTER_URL, {
            name, email, password
        })
            .then(response => {
                if (response.data.status) {
                    navigate('/login')
                }
            })
            .catch(err => {
                console.log(err)
            })

        setName('');
        setEmail('');
        setPassword('')
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name"><b>Name</b></label>
                    <input type="text" placeholder="Name" name="name" id="name" value={name} required onChange={(e) => setName(e.target.value)} />

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" value={email} required onChange={(e) => setEmail(e.target.value)} />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" id="psw" value={password} required onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" className="registerbtn">Sign Up</button>
                    <p>Already have an account <Link to='/login'>Login Here</Link></p>
                </form>
            </div>
        </>
    )
}

export default SignUp;