import styled from "styled-components";
import { device } from "../../device/device";

export const TableFilterContainer = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 30%;
  }
`;
