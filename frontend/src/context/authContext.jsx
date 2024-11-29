import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
//import Cookies from "js-cookie";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  console.log(context)
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  //const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  // clear errors after 5 seconds
  useEffect(() => {
    /*
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
    */
    const timer = setTimeout(() => {
      setError("");
    }, 5000);

  }, [error]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      if (res.status === 200) {
        //Cookies.set('token', res.data.token); mejor localstorage pq no funciona
        localStorage.setItem('token', res.data.token);
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.message);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      //Cookies.set('token', res.data.token);
      localStorage.setItem('token', res.data.token);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message, "err");
      setError(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    //Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {    
      //const cookies = Cookies.get();
      const token = localStorage.getItem('token');
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
      try {
        const res = await verifyTokenRequest(token);
        //const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
    //console.log('after');
  }, []);
  /*
  useEffect(() => {
    //console.log('before useefffect');
    const checkLogin = async () => {    
      const cookies = Cookies.get();
      const token = localStorage.getItem('token');
      console.log(cookies, "token front");
      console.log(token, "token front");
      console.log(Cookies.get('token'), "token frontxx");
      
      console.log(Cookies, "token front");
      console.log(cookies.token, "token front");
      
      if (!cookies.token) {
        
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
      console.log(cookies.token, "token front");
  
      try {
        const res = await verifyTokenRequest(cookies.token);
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
      }
    };
    checkLogin();
    //console.log('after');
  }, []);
  */

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        isAuthenticated,
        error,
        //errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
