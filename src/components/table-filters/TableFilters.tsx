import { useState } from "react";

import {
  CheckerInput,
  CheckerLabel,
  CheckersAndLabels,
  CountryCount,
  CustomSelect,
  InputAndFoundCountries,
  InputWrapper,
  RegionBtn,
  RegionBtnsWrapper,
  RegionWrapper,
  SearchIcon,
  Sort,
  StatusSpan,
  StatusWrapper,
  StyledInput,
  StyledLabel,
  TableFilterContainer,
} from "./styles";
import { Country, StateSetter } from "../../types";
import { regionNames, statusNames } from "../../constants";

type TableFilterProps = {
  countriesData?: Country[];
  search: string;
  setSearch: (search: string) => void;
  sort: string;
  setSort: (sort: string) => void;
  setSelectedRegion: (region: string) => void;
  setStatusName: StateSetter<string[]>;
  statusName: string[];
};

const TableFilters: React.FC<TableFilterProps> = ({
  search,
  setSearch,
  countriesData,
  sort,
  setSort,
  setSelectedRegion,
  setStatusName,
  statusName,
}) => {
  const [activeRegion, setActiveRegion] = useState<string>("");

  const handleSelectRegion = (region: string) => {
    setActiveRegion(region);
    setSelectedRegion(region);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStatusName((prev: string[]) => {
      if (value === "All") {
        return ["All"];
      } else {
        const newStatus = prev.includes(value)
          ? prev.filter((status) => status !== value)
          : [...prev.filter((status) => status !== "All"), value];

        return newStatus.length ? newStatus : ["All"];
      }
    });
  };
  return (
    <TableFilterContainer>
      <InputAndFoundCountries>
        <CountryCount>Found {countriesData?.length} Countries</CountryCount>
        <InputWrapper>
          <SearchIcon size={15} />
          <StyledInput
            value={search}
            onChange={handleSearch}
            placeholder="Search by Name, Region, Subregion..."
          />
        </InputWrapper>
      </InputAndFoundCountries>

      <Sort>
        <StyledLabel htmlFor="sort">Sort By</StyledLabel>
        <CustomSelect
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          name="sort"
        >
          <option defaultValue="Population">Population</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="Area">Area (km²)</option>
        </CustomSelect>
      </Sort>
      <RegionWrapper>
        <StyledLabel>Region</StyledLabel>
        <RegionBtnsWrapper>
          {regionNames.map((regionObj) => (
            <RegionBtn
              key={regionObj.id}
              onClick={() => handleSelectRegion(regionObj.name)}
              $btnIsActive={activeRegion === regionObj.name}
            >
              {regionObj.name}
            </RegionBtn>
          ))}
        </RegionBtnsWrapper>
      </RegionWrapper>
      <StatusWrapper>
        <StatusSpan>Status</StatusSpan>
        {statusNames.map((item) => (
          <CheckersAndLabels key={item.id}>
            <CheckerInput
              type="checkbox"
              id={item.name}
              value={item.name}
              onChange={handleCheck}
              checked={statusName.includes(item.name)}
            />
            <CheckerLabel htmlFor={item.name}>{item.name}</CheckerLabel>
          </CheckersAndLabels>
        ))}
      </StatusWrapper>
    </TableFilterContainer>
  );
};

export default TableFilters;
