import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth(prevAuth => ({
        ...prevAuth,
        user: parseData.user,
        token: parseData.token,
      }));
      axios.defaults.headers.common["Authorization"] = parseData.token
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);  

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
