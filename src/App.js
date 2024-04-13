import { useState } from 'react';
import AboutMe from './AboutMe';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import Section from './Section';

function App() {

  const [sections, setSections] =  useState([
    {id: "aboutme", name: "Sobre Mim", backgroundcolor: "#2C2C2C", content: <AboutMe/>, active: false},
    {id: "projects", name: "Projetos", backgroundcolor: "#313131", content: <Projects/>, active: false}
  ]);


  const activeSection = (id, active) =>{

    setSections(sections.map((section) =>{
      if(section.id === id){
        section.active = active;
      }

      return section; 
    }));
    
  }

  return (
    <div className="App">
      <Navbar 
        sectionAboutMe={sections[0].active}
        sectionProjects={sections[1].active}
      />
      <Header />

      {sections.map((section) => {
        return <Section
          key={section.id} 
          id={section.id}
          title={section.name}
          backgroundcolor={section.backgroundcolor}
          Content={section.content}
          active={activeSection}
        />
      })}
    </div>
  );
}

export default App;
