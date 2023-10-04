import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Recipes from './Recipes';
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
          {/* <Route exact path="/about" element={<About />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
