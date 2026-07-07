import { createContext, useContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // -------------------------------
  // State
  // -------------------------------
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // -------------------------------
  // Load User & Token on Refresh
  // -------------------------------
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  // -------------------------------
  // Login Function
  // -------------------------------
  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", jwtToken);
  };

  // -------------------------------
  // Logout Function
  // -------------------------------
const logout = () => {
  localStorage.clear();

  setUser(null);
  setToken(null);
};

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};