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
};

const Table: React.FC<TableProps> = ({ countriesData }) => {
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
          {countriesData &&
            countriesData.map((country) => (
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
