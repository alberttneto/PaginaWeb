import "./Navbar.css";


const Navbar = () =>{

    return (
        <nav className="navbar">
            <a><h1>Alberto Ferreira</h1></a>
            <ul>
                <a>
                    <li>Inicio</li>
                    <hr/>
                </a>
                <a>
                    <li>Sobre mim</li>
                    <hr/>    
                </a>
                <a>
                    <li>Projetos</li>
                    <hr/>
                </a>
            </ul>
        </nav>
    );
}


export default Navbar;
