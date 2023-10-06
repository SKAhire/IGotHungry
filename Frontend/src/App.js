import Navbar from './components/Navbar';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
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
          {/* <Route exact path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
