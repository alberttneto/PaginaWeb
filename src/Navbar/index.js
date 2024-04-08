import "./Navbar.css";


const Navbar = () =>{

    return (
        <nav className="navbar">
            <a><h1>Alberto Ferreira</h1></a>
            <ul>
                <a href="#header">
                    <li>Inicio</li>
                    <hr/>
                </a>
                <a href="#aboutme">
                    <li>Sobre mim</li>
                    <hr/>    
                </a>
                <a href="#projects">
                    <li>Projetos</li>
                    <hr/>
                </a>
            </ul>
        </nav>
    );
}


export default Navbar;
