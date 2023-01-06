import React from 'react';
import styled from 'styled-components';
import Avatar from './asset/img/avatar.png';

function App() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #e07c24;
    padding: 2rem;
    width: max-content;
  `;

  const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    border-radius: 50%;
  `;

  const Portion = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
  `;

  const MediumText = styled.span`
    font-size: 2rem;
    font-weight: bold;
    font-family: sans-serif;
    color: #f9dbd2;
  `;

  const Btn = styled.button`
    background-color: #002366;
    border: none;
    border-radius: 7px;
    padding: 1rem;
    margin-top: 1rem;
  `;

  const SmallText = styled.span`
    font-size: 1rem;
    font-family: sans-serif;
    color: #fff;
  `;

  return (
    <Container>
      <Logo>
        <img src={Avatar} alt='avatar' />
      </Logo>
      <Portion>
        <MediumText>Twinkle Goyal</MediumText>
      </Portion>
      <Portion>
        <SmallText>Project : HP S&M</SmallText>
      </Portion>
      <Btn>
        <SmallText>Styled Component</SmallText>
      </Btn>
    </Container>
  );
}

export default App;
