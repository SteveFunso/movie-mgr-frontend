import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Info = styled.p`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #555;
`;

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <ProfileContainer>
      <Title>Profile</Title>
      {user ? (
        <>
          <Info>
            <strong>Username:</strong> {user.username}
          </Info>
          <Info>
            <strong>Email:</strong> {user.email}
          </Info>
        </>
      ) : (
        <Info>Loading...</Info>
      )}
    </ProfileContainer>
  );
};

export default Profile;
