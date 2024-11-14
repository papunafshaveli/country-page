import styled from "styled-components";

import { device } from "../../device";

export const TableContainer = styled.div`
  width: 100%;
  font-family: "Be Vietnam Pro";

  @media ${device.tablet} {
    width: 70%;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
`;

export const Tr = styled.tr`
  width: 100%;
`;

export const Th = styled.th`
  color: #d2d5da;
  font-size: 1.3rem;
  font-weight: 900;

  text-align: left;

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

export const StyledTbody = styled.tbody`
  ${Tr} {
    cursor: pointer;

    height: 7rem;
  }
`;

export const Td = styled.td`
  vertical-align: middle;

  width: 1%;

  padding: 0 0.2rem;

  color: #d2d5da;

  font-size: 1.2rem;
  font-weight: 700;

  img {
    max-width: 100%;
  }

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

export const StyledThead = styled.thead`
  height: 4rem;

  border-bottom: 1px solid #6c727f;
`;
