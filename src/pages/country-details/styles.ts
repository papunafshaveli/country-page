import styled from "styled-components";
import { device } from "../../device";

export const CountryDetailsContainer = styled.div`
  width: 100%;

  background-color: #1b1d1f;

  font-family: "Be Vietnam Pro";
`;

export const CountryDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  border-radius: 2rem;
  border: 0.1rem solid #2b2d31;

  background-color: #1b1d1f;

  margin: -5rem 3rem 3rem 3rem;

  @media ${device.mobileL} {
    margin: -5rem 6rem 6rem 6rem;
  }

  @media ${device.tablet} {
    margin: -5rem 12rem 12rem 12rem;
    border: 0.1rem solid #2b2d31;
  }
`;

export const SelectedCountryImg = styled.img`
  width: 15rem;
  border-radius: 0.5rem;

  margin-top: -4rem;

  @media ${device.tablet} {
    width: 22rem;
  }
`;

export const CountryNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;
  justify-content: center;
`;

export const Name = styled.h1`
  color: #6c727f;
  font-size: 2.4rem;
`;

export const NativeName = styled.h2`
  color: #6c727f;
  font-size: 2.4rem;
`;

export const PopulationAndAreaWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  align-items: center;

  @media ${device.tabletS} {
    gap: 3rem;
  }
`;

export const Statistic = styled.div`
  background-color: #282b30;

  display: flex;
  justify-content: center;

  border-radius: 0.8rem;

  height: 5rem;
  width: 15rem;

  @media ${device.tabletS} {
    width: 18rem;
  }
`;

export const VerticalSeparator = styled.div`
  width: 0.2rem;
  height: 90%;

  background-color: #1b1d1f;

  align-self: center;
`;

export const StatisticText = styled.p`
  font-size: 0.8rem;

  padding: 1rem;

  color: #6c727f;

  align-self: center;

  @media ${device.tabletS} {
    font-size: 1.1rem;
  }
`;

export const StyledTable = styled.table`
  width: 100%;

  th,
  td {
    border-top: 1px solid #2b2d31;
    border-bottom: 1px solid #2b2d31;

    padding: 2.5rem 0;

    text-align: left;

    &:nth-child(1) {
      padding-left: 2rem;
    }
    &:nth-child(2) {
      padding-right: 2rem;
      text-align: right;
    }
  }

  td {
    color: #6c727f;

    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  margin-bottom: 6rem;
`;

export const NeighbourCountriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: start;
  gap: 1rem;

  width: 95%;
`;

export const NeighbourCountriesLabel = styled.p`
  color: #6c727f;
  font-size: 1.4rem;
`;

export const NeighbourCountry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const NeighbourFlag = styled.img`
  width: 8rem;
  max-height: 4rem;

  border-radius: 0.8rem;
`;

export const NeghbourName = styled.span`
  color: #6c727f;
  font-size: 1.2rem;
`;
