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

  // const activeSection = (xxx, active) =>{
  //   console.log(active);
  //   console.log(xxx);
  //   setSections(sections.map((section) =>{
  //     if(section.id === xxx){
  //       section.active = active;
  //     }
  //   }));
    
  // }

  return (
    <div className="App">
      <Navbar />
      <Header />

      {sections.map((section) => {
        return <Section
          key={section.id} 
          id={section.id}
          title={section.name}
          backgroundcolor={section.backgroundcolor}
          Content={section.content}
          // active={activeSection}
        />
      })}
    </div>
  );
}

export default App;
