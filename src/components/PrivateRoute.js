import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>;

  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
