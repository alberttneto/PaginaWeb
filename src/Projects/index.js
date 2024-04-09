import Card from "../Card";
import "./Projects.css"

const Projects = () => {

    const projects = [
        {name: "Simulador MT", 
        description: "Ferramenta que simula uma máquina de Turing, um modelo teórico de computação. Com uma interface intuitiva, permite aos usuários criar e executar programas turing completos, visualizar o funcionamento da fita e acompanhar o estado interno da máquina. Ideal para o estudo e compreensão dos conceitos fundamentais da computação teórica.", 
        image: "", type: "Acadêmico"},
        {name: "Replica Página Netflix", 
        description: "", 
        image: "", type: "Cursos"},
        {name: "Calculadora", 
        description: "", 
        image: "", type: "Cursos"},
        {name: "Camimica", 
        description: "", 
        image: "", type: "Pessoal"},
        {name: "Site Clínica Médica", 
        description: "",
        image: "", type: "Acadêmico"},
        {name: "Organizador de Equipes", 
        description: "", 
        image: "", type: ""},
        {name: "Organizador de Equipes", 
        description: "", 
        image: "", type: ""}

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
            <div className="cards">
                {projects.map((project) => {
                    return <Card 
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        type={project.type}
                    />
                })}
            </div>

        </div>
    );
}


export default Projects;
