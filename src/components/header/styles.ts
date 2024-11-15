import styled from "styled-components";

import headerBg from "/headerBg.jpg";

import { device } from "../../device";

export const HeaderContainer = styled.header`
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
