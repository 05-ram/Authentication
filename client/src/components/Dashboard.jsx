import { useEffect } from "react"
import axios from "axios";
import { AUTH_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import dashImg from "../assets/images/dash.png";

const Dashboard = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const handleBack = () => {
        navigate('/')
    }
    useEffect(() => {
        axios.get(AUTH_URL)
            .then(response => {
                if (response.data.status) {
                    navigate('/dashboard')
                }
                else {
                    navigate('/')
                }
            })
    }, [])
    return (
        <>
            <button className="btn" onClick={handleBack}>Back</button>
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", height: '100vh', gap: "24px" }}>
                <h3 style={{ textAlign: "center", fontSize: "24px" }}>Dashboard</h3>
                <img src={dashImg} alt="image" height={700} />
            </div>
        </>
    )
}

export default Dashboard