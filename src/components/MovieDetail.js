import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
import {
  MovieDetailContainer,
  Title,
  Description,
  Info,
  ImageContainer,
  Image,
  CommentsSection,
  CommentsTitle,
  CommentList,
  CommentItem,
  CommentAuthor,
  CommentText,
  CommentForm,
  TextArea,
  Button,
} from "../styles/MovieDetailStyles";

const MovieDetail = () => {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/movies/${slug}`);
        setMovie(response.data);
        fetchComments(response.data.id);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    const fetchComments = async (movieId) => {
      try {
        const response = await axios.get(`/comments/${movieId}`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchMovie();
  }, [slug]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "/comments",
        {
          comment,
          movieId: movie.id,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setComments([...comments, response.data]);
      setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <MovieDetailContainer>
      <Title>{movie.name}</Title>
      <ImageContainer>
        <Image src={movie.photo} alt={movie.name} />
      </ImageContainer>
      <Description>{movie.description}</Description>
      <Info>
        <span>Release Date: {movie.releaseDate}</span>
        <span>Rating: {movie.rating}</span>
      </Info>
      <Info>
        <span>Ticket Price: ${movie.ticketPrice}</span>
        <span>Country: {movie.country}</span>
      </Info>
      <Info>Genres: {movie.genres.join(", ")}</Info>

      <CommentsSection>
        <CommentsTitle>Comments</CommentsTitle>
        <CommentList>
          {comments.map((comment) => (
            <CommentItem key={comment.id}>
              <CommentAuthor>{comment.name}</CommentAuthor>
              <CommentText>{comment.comment}</CommentText>
            </CommentItem>
          ))}
        </CommentList>
        <CommentForm onSubmit={handleCommentSubmit}>
          <TextArea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <Button type="submit">Submit</Button>
        </CommentForm>
      </CommentsSection>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
