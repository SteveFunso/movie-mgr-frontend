import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import MoviesList from "./components/MoviesList";
import MovieDetail from "./components/MovieDetail";
import CreateMovie from "./components/CreateMovie";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route
            path="/movies"
            element={<PrivateRoute component={MoviesList} />}
          />
          <Route
            path="/movies/create"
            element={<PrivateRoute component={CreateMovie} />}
          />
          <Route
            path="/movies/:slug"
            element={<PrivateRoute component={MovieDetail} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/profile"
            element={<PrivateRoute component={Profile} />}
          />
        </Routes>
      </AppContainer>
    </>
  );
};

export default App;
