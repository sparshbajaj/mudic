import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.div`
  font-family: 'Damion', cursive;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  margin-top: 20vh;
  `;

const LoginButton = styled.button`
  font-family: inherit;
  font-size: 15px;
  border: none;
  border-radius: 7px;
  background-color: #1db954;
  color: white;
  height: 50px;
  width: 200px;
  cursor: pointer;
  outline:none;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);

  &:hover {
    background-color: #2ad666;
    transition: background-color, 0.5s;
    &::before {
      content: "Connect with Spotify";
    }
  }

  &::before {
    content: "Start";
  }
`;

const Subtitle = styled.span`
  text-align: center;
`;

const login = () => {
  const CLIENT_ID = '99fe567ac76d48cd9d8ec5859a90189d'; //process.env.REACT_APP_CLIENT_ID;
  let redirectUri;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    redirectUri = 'https://mudic.herokuapp.com/app';
  } else {
    redirectUri = 'https://mudic.herokuapp.com/';
  }
  const scope = 'user-read-recently-played,user-top-read,playlist-modify-public';
  const authUri = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}`;
  window.location.replace(authUri);
};

export default () => (
  <Wrapper>
    <MainTitle>
      
      <img src="https://sparshbajaj.co/wp-content/uploads/2020/07/mudic-white.svg" alt="Mudic" width="300px"
         height="auto"></img>

    </MainTitle>
    <Subtitle> &#127926; Music + &#128102; Your Mood  = Mudic</Subtitle>
    <LoginButton onClick={() => login()} />
  </Wrapper>
);
