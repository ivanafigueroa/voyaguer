import "./Navbar.css";
import { Link } from "react-router-dom";
import RocketIcon  from "@mui/icons-material/Rocket";


function Navbar(props){
    const links = props.links;
    

        //Links nos muestra el array pero props nos muestra el objeto de dentro
        return (
            <nav>
                <div>
                    <RocketIcon />
                    <h2>{props.header}</h2>
                </div>
                <div>
                    {links.map((link) => (
                        <Link className="link" to={link.link} key={link.id}>
                            {link.text}
                        </Link>
                    ))}
                </div>
            </nav>
        );
}

export default Navbar;