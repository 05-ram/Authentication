import { useState } from "react";
import { RESET_URL } from "../../config";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    // const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(RESET_URL, {
            email
        }).then(response => {
            if (response.data.status) {
                alert('Reset Successful')
            }
            else {
                console.log('')
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button type="submit" className="registerbtn">Send</button>
            </form>
        </div>
    )
}

export default ForgotPassword