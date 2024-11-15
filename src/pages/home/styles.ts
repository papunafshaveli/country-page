import styled from "styled-components";

import { device } from "../../device";

export const HomeContainer = styled.div`
  width: 100%;

  background-color: #1b1d1f;

  .loader {
    position: absolute;
    left: 25%;
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
