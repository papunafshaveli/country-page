import styled from "styled-components";

import headerBg from "/headerBg.jpg";
import { device } from "./device";

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: #1b1d1f;

  overflow-x: hidden;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 20rem;

  background-image: url(${headerBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media ${device.tablet} {
    height: 25rem;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  background-color: #1b1d1f;

  @media ${device.tablet} {
    flex-direction: row;
    align-items: start;

    margin: 0 3rem;
    padding: 1rem 3rem;

    margin: -5rem 3rem 3rem 3rem;
    border-radius: 2rem;
    border: 0.1rem solid #2b2d31;
  }
`;
