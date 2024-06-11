import styled from "styled-components";
import { Link } from "react-router-dom";

export const MoviesContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const CreateLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  font-size: 18px;
  color: #007bff;
  &:hover {
    color: #0056b3;
  }
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

export const MovieItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieLink = styled(Link)`
  display: block;
  color: #fff;
  text-decoration: none;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const MovieTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  font-size: 16px;
  text-align: center;
  color: #fff;
`;
