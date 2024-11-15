import { useNavigate } from "react-router-dom";

import DesertedIcon from "/DesertedIcon.png";

import { Country } from "../../types";

import {
  StyledTbody,
  StyledTable,
  TableContainer,
  Th,
  Tr,
  Td,
  StyledThead,
  EmptyState,
  DesertedImg,
  Description,
} from "./styles";

type TableProps = {
  countriesData?: Country[];
  term: string;
  sort: string;
  selectedRegion: string;
  statusName: string[];
};

const Table: React.FC<TableProps> = ({
  countriesData,
  term,
  sort,
  selectedRegion,
  statusName,
}) => {
  const lowerCaseTerm = term.toLowerCase();
  const navigate = useNavigate();

  const filteredCountries = countriesData
    ?.filter((country) => {
      const matchesTerm =
        country.name.common.toLowerCase().includes(lowerCaseTerm) ||
        country.region.toLowerCase().includes(lowerCaseTerm) ||
        country.subRegion?.toLowerCase().includes(lowerCaseTerm);

      const matchesRegion =
        selectedRegion && selectedRegion !== "All"
          ? country.region === selectedRegion
          : true;

      const matchesStatus =
        statusName.includes("All") ||
        (statusName.includes("Independent") && country.independent) ||
        (statusName.includes("Member of the United Nations") &&
          !country.independent);

      return matchesTerm && matchesRegion && matchesStatus;
    })
    .sort((a, b) => {
      switch (sort) {
        case "population":
          return b.population - a.population;
        case "alphabetical":
          return a.name.common.localeCompare(b.name.common);
        case "area":
          return (b.area || 0) - (a.area || 0);
        default:
          return 0;
      }
    });
  const handleRowClick = (country: Country) => {
    navigate("/country-details", { state: { country } });
  };
  return (
    <TableContainer>
      {filteredCountries?.length ? (
        <StyledTable>
          <StyledThead>
            <Tr>
              <Th>Flag</Th>
              <Th>Name</Th>
              <Th>Population</Th>
              <Th>Area (km²)</Th>
              <Th>Region</Th>
            </Tr>
          </StyledThead>
          <StyledTbody>
            {!!filteredCountries &&
              filteredCountries.map((country) => (
                <Tr key={country.cca3} onClick={() => handleRowClick(country)}>
                  <Td>
                    <img
                      src={country.flags.svg}
                      alt={`Flag of ${country.name.common}`}
                      width="30"
                    />
                  </Td>
                  <Td>{country.name.common}</Td>
                  <Td>{country.population.toLocaleString()}</Td>
                  <Td>{country.area?.toLocaleString() || "N/A"}</Td>
                  <Td>{country.region}</Td>
                </Tr>
              ))}
          </StyledTbody>
        </StyledTable>
      ) : (
        <EmptyState>
          <DesertedImg src={DesertedIcon} />
          <Description>No countries found.</Description>
        </EmptyState>
      )}
    </TableContainer>
  );
};

export default Table;
