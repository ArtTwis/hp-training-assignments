import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  height: 75px;
  background: #ffaa1d;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const BrandLogoPortion = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BrandLogo = styled.img`
  width: 50px;
  margin: 0 8px 0 8px;
`;

export const BrandTitle = styled.span`
  font-size: 2rem;
  font-family: var(--font-Comfortaa-Bold);
  font-weight: bold;
  color: #333333;
`;

export const NavItemList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0px;
`;

export const ListItem = styled.li`
  color: #000000;
  font-size: 1rem;
  font-family: var(--font-Comfortaa-Bold);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 32px 0 0;
  cursor: pointer;
`;

export const Portfolio = styled.a`
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  font-family: var(--font-Comfortaa-Regular);
  font-size: 1rem;
  font-weight: bold;
`;
