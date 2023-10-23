import Navbar from './components/Navbar';
import Home from './routes/Home';
import Recipes from './routes/Recipes';
import Recipe from './routes/Recipe';
import About from './routes/About';
import Submit from './routes/Submit';
import Contact from './routes/Contact';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Profile from './routes/Profile';
import MainRecipes from './routes/MainRecipes'
import Footer from './components/Footer';
import UserState from './context/users/UserState';
import RecipeState from './context/recipes/RecipeState';

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
        <UserState>
          <RecipeState>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipes/id" element={<Recipe />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/submit" element={<Submit />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/my-profile" element={<Profile />} />
              <Route exact path="/my-profile/recipes" element={<MainRecipes />} />
            </Routes>
            <Footer />
          </RecipeState>
        </UserState>
      </Router>
    </>
  );
}

export default App;
