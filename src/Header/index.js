import "./Header.css";


const Header = () =>{


    return (
        <header className="header" id="header">
            <div>
                <h1>Alberto Ferreira Neto</h1>
                <p>Desenvolvedor React</p>
            </div>

            <div>
                <img src="/images/Profile.png" alt="Foto de perfil" width={550}/>
            </div>
        </header>
    );
}

export default Header;