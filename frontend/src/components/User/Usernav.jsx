import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Usernav.css";

export default function Usernav() {
    const nav = useNavigate();
    return (
        <>
            <div className="nav-main">
                <div>
                    <img src="nav-logo.png" alt=""/>
                </div>
                <div className="option">
                    <ul>
                        <li><Link to='/userhome'>Home</Link></li>
                        <li><Link to='/book_service'>Book Service</Link></li>
                        <li><Link to='/update'>Veiw updates</Link></li>
                        <li><Link to='/contactus'>Contact us</Link></li>
                        <li><a>About us</a></li>
                    </ul>
                </div>

            </div>

        </>
    );
}