import styled from "styled-components";
import { device } from "../../device/device";

import { IoMdSearch } from "react-icons/io";

export const TableFilterContainer = styled.div`
  width: 100%;

  @media ${device.tablet} {
    width: 30%;
  }
`;

export const InputAndFoundCountries = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;
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
  width: 25rem;

  padding: 1rem;
  padding-left: 3rem;

  border: none;
  border-radius: 0.8rem;

  font-size: 1.4rem;

  background-color: #282b30;

  &:focus {
    outline: none;

    border-color: #aaa;
  }
`;
