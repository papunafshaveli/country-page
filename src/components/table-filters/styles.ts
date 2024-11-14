import styled from "styled-components";
import { device } from "../../device/device";

import { IoMdSearch } from "react-icons/io";

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
`;

export const SearchIcon = styled(IoMdSearch)`
  position: absolute;
  left: 1rem;

  color: #888;
`;

export const StyledInput = styled.input`
  width: 20rem;

  padding: 1rem;
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

  @media ${device.tabletS} {
    width: 25rem;
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

  background-color: #282b30;
  color: #6c727f;

  border: none;
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
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#282B30" : "unset")};
  color: ${({ isActive }) => (isActive ? "#D2D5DA" : "#6C727F")};
  border-radius: 0.8rem;

  &:hover {
    background-color: #4e80ee;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
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
