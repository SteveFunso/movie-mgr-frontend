import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/users/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data.user);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token]);

  const login = async (username, password) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/users/login`,
      { username, password }
    );
    localStorage.setItem("token", response.data.token);
    setToken(response.data.token);
    setUser(response.data.user);
  };

  const register = async (username, email, password) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/users/register`,
      { username, email, password }
    );
    localStorage.setItem("token", response.data.token);
    setToken(response.data.token);
    setUser(response.data.user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, token, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
