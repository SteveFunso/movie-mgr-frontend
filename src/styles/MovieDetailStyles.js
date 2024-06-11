import styled from "styled-components";

export const MovieDetailContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 800px;
  margin: 20px auto;
  font-family: "Roboto", sans-serif;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5em;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #555;
`;

export const Info = styled.div`
  margin-bottom: 20px;
  font-size: 1.1em;
  color: #666;
  display: flex;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 500px;
  max-height: 300px;
  margin: 0 auto 20px auto;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const CommentsSection = styled.div`
  margin-top: 40px;
`;

export const CommentsTitle = styled.h2`
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

export const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CommentItem = styled.li`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const CommentAuthor = styled.strong`
  display: block;
  margin-bottom: 5px;
  color: #007bff;
`;

export const CommentText = styled.p`
  margin: 0;
  color: #555;
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 100px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  &:hover {
    background-color: #0056b3;
  }
`;
