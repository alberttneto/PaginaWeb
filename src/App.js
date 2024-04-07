import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Section from './Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Section 
        title={"Sobre mim"}
      />
      <Section 
        title={"Projetos"}
        backgroundcolor={"#313131"}
      />
    </div>
  );
}

export default App;
