import AboutMet from './AboutMe';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Projects from './Projects';
import Section from './Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section 
        title={"Sobre mim"}
        id={"aboutme"}
        Content={<AboutMet />}
      />
      <Section 
        title={"Projetos"}
        backgroundcolor={"#313131"}
        id={"projects"}
        Content={<Projects />}
      />
    </div>
  );
}

export default App;
