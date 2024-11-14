import { Country } from "../../types/country";

import {
  CountryCount,
  InputAndFoundCountries,
  InputWrapper,
  SearchIcon,
  StyledInput,
  TableFilterContainer,
} from "./styles";

type TableFilterProps = {
  countriesData?: Country[];
  search: string;
  setSearch: (search: string) => void;
};

const TableFilters: React.FC<TableFilterProps> = ({
  search,
  setSearch,
  countriesData,
}) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
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
    </TableFilterContainer>
  );
};

export default TableFilters;
