
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { RecipesProvider } from "./context/recipesContext.jsx";
import RecipesMainPage from "./pages/RecipesMainPage.jsx";
import RecipeInfoPage from "./pages/RecipeInfoPage.jsx";
import Navbar from "./components/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx"; 

function App() { 
  const ShowNavbar = () => {
    const location = useLocation();
    const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
    return isAuthPage ? <Navbar /> : null;
  };

  return (
    <RecipesProvider>
      <BrowserRouter>
        <ShowNavbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<RecipesMainPage />} />
          <Route path="/:id" element={<RecipeInfoPage />} />
        </Routes>
      </BrowserRouter>
    </RecipesProvider>

  );
}

export default App;
