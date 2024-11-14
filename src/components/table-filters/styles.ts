import styled from "styled-components";

import { IoMdSearch } from "react-icons/io";
import { device } from "../../device";

export const TableFilterContainer = styled.div`
  width: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media ${device.tablet} {
    width: 30%;
  }
`;

export const InputAndFoundCountries = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }
`;

export const CountryCount = styled.h2`
  font-size: 1.6rem;
  font-weight: 900;

  color: #6c727f;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const SearchIcon = styled(IoMdSearch)`
  position: absolute;
  left: 1rem;

  color: #888;
`;

export const StyledInput = styled.input`
  width: 20rem;

  padding: 1.2rem;
  padding-left: 3rem;

  border: none;
  border-radius: 0.8rem;

  font-size: 1.4rem;

  background-color: #282b30;
  color: #6c727f;

  &:focus {
    outline: none;

    border-color: #aaa;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const Sort = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
`;

export const CustomSelect = styled.select`
  width: 100%;

  padding: 1rem;

  background-color: #1b1d1f;
  color: #6c727f;

  border: 0.2rem solid 6c727f;
  border-radius: 0.8rem;
`;

export const StyledLabel = styled.label`
  color: #6c727f;
  font-size: 1.6rem;
  font-weight: 800;
`;

export const RegionWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
`;

export const RegionBtnsWrapper = styled.div`
  width: 100%;

  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const RegionBtn = styled.button<{ isActive: boolean }>`
  padding: 0.8rem 1.6rem;

  border: none;
  border-radius: 0.8rem;

  cursor: pointer;

  background-color: ${({ isActive }) => (isActive ? "#282B30" : "unset")};
  color: ${({ isActive }) => (isActive ? "#D2D5DA" : "#6C727F")};

  &:hover {
    background-color: #4e80ee;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

export const CheckersAndLabels = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const CheckerLabel = styled.label`
  color: #6c727f;

  font-size: 1.2rem;
  font-weight: 800;
`;

export const StatusSpan = styled.span`
  color: #6c727f;

  font-size: 1.6rem;
  font-weight: 800;
`;

export const CheckerInput = styled.input`
  width: 1.8rem;
  height: 1.8rem;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`;
