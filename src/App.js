import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Experience from './Experience/Experience';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
// import '../node_modules/bootstrap5/src/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
