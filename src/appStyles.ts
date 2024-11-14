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
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;

  background-color: #1b1d1f;

  @media ${device.tablet} {
    flex-direction: row;

    margin: 0 3rem;
    padding: 1rem 3rem;
  }
`;
