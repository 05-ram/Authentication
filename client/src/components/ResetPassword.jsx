import axios from "axios";
import { useState } from "react"
import { EMAIL_URL } from "../../config";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { token } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${EMAIL_URL}/${token}`, {
            password
        })
            .then(response => {
                if (response.data.status) {
                    alert(response.data.message)
                    navigate('/login')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="psw"><b>Reset Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" value={password} required onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className="registerbtn">Reset</button>
            </form>
        </div>
    )
}

export default ResetPassword