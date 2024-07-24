import { useState } from "react";
import Card from "../Card";
import { v4 as uuidv4 } from 'uuid';
import "./Projects.css"
import DescriptionProject from "../DescriptionProject";

const Projects = () => {

    const [filterProjects, setfilterProjects] = useState([]);

    const projects = [
        {name: "Simulador MT", 
        description: "Ferramenta que simula uma máquina de Turing, um modelo teórico de computação. Com uma interface intuitiva, permite aos usuários criar e executar programas turing completos, visualizar o funcionamento da fita e acompanhar o estado interno da máquina. Ideal para o estudo e compreensão dos conceitos fundamentais da computação teórica.", 
        image: "", type: "Acadêmico", link: "https://alberttneto.github.io/SimuladorMT/"},
        {name: "Replica Página Netflix", 
        description: "", 
        image: "", type: "Cursos", link: "https://alberttneto.github.io/BootCamp-TBDevWeb/Recriando_Interface_Netflix/"},
        {name: "Calculadora", 
        description: "", 
        image: "", type: "Cursos", link: "https://alberttneto.github.io/BootCamp-TBDevWeb/Calculadora_Mentoria5/"},
        {name: "Camimica", 
        description: "", 
        image: "", type: "Pessoal", link: "https://alberttneto.github.io/Camimica/"},
        {name: "Site Clínica Médica", 
        description: "",
        image: "", type: "Acadêmico", link: "http://clinicamedicageral.atwebpages.com/index.html"},
        {name: "Organizador de Equipes", 
        description: "", 
        image: "", type: ""},
    ];

    const typeCards = (event) =>{

        setfilterProjects(projects.filter((project) => 
            project.type === event
        ))
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
                {filterProjects.length === 0 ?
                    projects.map((project) => {
                        return <Card 
                            key={uuidv4()}
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            type={project.type}
                            link={project.link}
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
                            link={project.link}
                        />
                    })
                }
                <DescriptionProject 

                />
            </div>

        </div>
    );
}


export default Projects;
