import { Country } from "../../types/country";
import {
  StyledTbody,
  StyledTable,
  TableContainer,
  Th,
  Tr,
  Td,
  StyledThead,
} from "./styles";

type TableProps = {
  countriesData?: Country[];
  term: string;
};

const Table: React.FC<TableProps> = ({ countriesData, term }) => {
  const filteredCountries = countriesData?.filter((country) => {
    const lowerCaseTerm = term.toLowerCase();
    return (
      country.name.common.toLowerCase().includes(lowerCaseTerm) ||
      country.region.toLowerCase().includes(lowerCaseTerm)
    );
  });

  return (
    <TableContainer>
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
          {filteredCountries &&
            filteredCountries.map((country) => (
              <Tr key={country.cca3}>
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
    </TableContainer>
  );
};

export default Table;
