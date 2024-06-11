import React, { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  FormTitle,
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Label,
} from "../styles/FormStyles";

const CreateMovie = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [rating, setRating] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [country, setCountry] = useState("");
  const [genres, setGenres] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "/movies/create",
        {
          name,
          description,
          releaseDate,
          rating,
          ticketPrice,
          country,
          genres: genres.split(",").map((genre) => genre.trim()),
          photo,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/movies");
    } catch (error) {
      console.error("Error creating movie:", error);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Create Movie</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Label>Description</Label>
        <TextArea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Label>Release Date</Label>
        <Input
          type="date"
          placeholder="Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          required
        />
        <Label>Rating</Label>
        <Select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Rating
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
        <Label>Ticket Price</Label>
        <Input
          type="number"
          placeholder="Ticket Price"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          required
        />
        <Label>Country</Label>
        <Input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <Label>Genres (comma separated)</Label>
        <Input
          type="text"
          placeholder="Genres (comma separated)"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          required
        />
        <Label>Photo URL</Label>
        <Input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
        />
        <Button type="submit">Create Movie</Button>
      </Form>
    </FormContainer>
  );
};

export default CreateMovie;
