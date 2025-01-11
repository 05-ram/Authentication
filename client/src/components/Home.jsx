import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { LOGOUT_URL } from "../../config"
const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        axios.get(LOGOUT_URL)
            .then(response => {
                if (response.data.status) {
                    console.log(response.data.status)
                    navigate('/login')
                }
                else {
                    console.log(response.data.status)
                }
            })
    }
    return (
        <>
            <section style={{ height: "100vh" }}>
                <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
                    <button className="btn">
                        <Link to='/dashboard'>Dashboard</Link>
                    </button>
                    <button className="btn" onClick={handleClick}>Log out</button>
                </div>
            </section>
        </>
    )
}

export default Home;