import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Routes/Home";
import Ingredients from "./Routes/Ingredients";
import RecipeForm from "./Routes/RecipeForm";
import Profile from "./Routes/Profile";
import Login from "./Routes/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/recipeForm" element={<RecipeForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
