import "./Projects.css"

const Projects = () => {

    const projects = [
        {name: "Simulador MT", 
        description: "Ferramenta que simula uma máquina de Turing, um modelo teórico de computação. Com uma interface intuitiva, permite aos usuários criar e executar programas turing completos, visualizar o funcionamento da fita e acompanhar o estado interno da máquina. Ideal para o estudo e compreensão dos conceitos fundamentais da computação teórica.", 
        image: "", tipo: "Acadêmico"},
        {name: "Replica Página Netflix", 
        description: "", 
        image: "", tipo: "Cursos"},
        {name: "Calculadora", 
        description: "", 
        image: "", tipo: "Cursos"},
        {name: "Camimica", 
        description: "", 
        image: "", tipo: "Pessoal"},
        {name: "Site Clínica Médica", 
        description: "",
        image: "", tipo: "Acadêmico"},
        {name: "", 
        description: "", 
        image: "", tipo: ""}
    ];

    return (
        <div className="projects">
            <ul>
                <li>
                    Todos
                </li>
                <li>
                    Acadêmicos
                </li>
                <li>
                    Pessoais
                </li>
                <li>
                    Cursos
                </li>
            </ul>

        </div>
    );
}


export default Projects;
