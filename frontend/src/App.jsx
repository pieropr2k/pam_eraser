
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*
import { Navbar } from "./components/Navbar";
import { AuthProvider, useAuth } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import Favorites from "./pages/Favorites";
*/
import { RecipesProvider } from "./context/recipesContext.jsx";
import RecipesMainPage from "./pages/RecipesMainPage.jsx";
import RecipeInfoPage from "./pages/RecipeInfoPage.jsx";
import Navbar from "./components/Navbar.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import { AuthProvider, useAuth } from "./context/authContext.jsx";
import { ProtectedRoute } from "./routes.jsx";

function App() {
  /* 
  const MainRoute = () => {
    const { isAuthenticated } = useAuth(); // Obtén el estado de autenticación
    return isAuthenticated ? <h1>Ya entraste</h1> : <HomePage />; // Render condicional
  }; 
  */
  const ShowNavbar = () => {
    //const location = useLocation();
    //const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";
    const { isAuthenticated } = useAuth(); // Obtén el estado de autenticación
    return isAuthenticated ? null : <Navbar />;
  };

  return (
    <AuthProvider>
      <RecipesProvider>
        <BrowserRouter>
          <ShowNavbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<RecipesMainPage />} />
              <Route path="/:id" element={<RecipeInfoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecipesProvider>
    </AuthProvider>

  );
  /* 
  return (
    <AuthProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/" element={<MainRoute />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<h1>Profile</h1>} />
                <Route path="/favorites" element={<Favorites/>} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
    </AuthProvider>
  );
  */
}

export default App;
