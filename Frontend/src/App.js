import Navbar from './components/Navbar';
import Home from './routes/Home';
import Recipes from './routes/Recipes';
import Recipe from './routes/Recipe';
import About from './routes/About';
import Submit from './routes/Submit';
import Contact from './routes/Contact';
import Footer from './components/Footer';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/id" element={<Recipe/>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/submit" element={<Submit />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
