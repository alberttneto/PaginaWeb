import { useEffect, useState } from "react";
import Card from "../Card";
import "./Projects.css"

const Projects = () => {

    const [filterProjects, setfilterProjects] = useState([]);

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
        {name: "", 
        description: "", 
        image: "", type: ""}
    ];

    const typeCards = (event) =>{

        setfilterProjects(projects.filter((project) => 
            project.type === event
        ))
        
        console.log(projects);
        console.log(filterProjects);
    }

    return (
        <div className="projects">
            <ul>
                <li onClick={event => typeCards(event.target.innerHTML)}>
                    Todos
                </li>
                <li onClick={event => typeCards(event.target.innerHTML)}>
                    Acadêmico
                </li>
                <li onClick={event => typeCards(event.target.innerHTML)}>
                    Pessoal
                </li>
                <li onClick={event => typeCards(event.target.innerHTML)}>
                    Cursos
                </li>
            </ul>

            <div className="cards">
                {filterProjects.length == 0 ?
                    projects.map((project) => {
                        return <Card 
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            type={project.type}
                        />
                    })
                    :
                    filterProjects.map((project) => {
                        return <Card 
                            key={project.name}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            type={project.type}
                        />
                    })
                }

            </div>

        </div>
    );
}


export default Projects;
