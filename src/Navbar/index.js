import { useEffect, useRef } from "react";
import "./Navbar.css";


const Navbar = ({sectionAboutMe, sectionProjects}) =>{

    const headerRef = useRef(null);
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    
    useEffect(() => {

        if(sectionAboutMe){
            aboutMeRef.current.classList.add("sectionActive");
        }else{
            aboutMeRef.current.classList.remove("sectionActive");
        }

        if(sectionProjects){
            projectsRef.current.classList.add("sectionActive");
        }else{
            projectsRef.current.classList.remove("sectionActive");
        }

        if(!sectionAboutMe && !sectionProjects){
            headerRef.current.classList.add("sectionActive");
        }else{
            headerRef.current.classList.remove("sectionActive");
        }
        
    },[sectionAboutMe, sectionProjects]);


    const removeSectionActive = (section) =>{

    }

    return (
        <nav className="navbar">
            <a><h1>Alberto Ferreira</h1></a>
            <ul>
                <a href="#header" ref={headerRef}>
                    <li>Inicio</li>
                    <hr/>
                </a>
                <a href="#aboutme" ref={aboutMeRef}>
                    <li>Sobre mim</li>
                    <hr/>    
                </a>
                <a href="#projects" ref={projectsRef}>
                    <li>Projetos</li>
                    <hr/>
                </a>
            </ul>
        </nav>
    );
}


export default Navbar;
