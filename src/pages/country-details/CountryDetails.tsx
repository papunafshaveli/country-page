import { useLocation } from "react-router-dom";
import { Country } from "../../types";
import {
  CountryDetailsContainer,
  CountryDetailsContent,
  CountryNameWrapper,
  Name,
  NativeName,
  NeighbourCountriesLabel,
  NeighbourCountriesWrapper,
  NeighbourCountry,
  PopulationAndAreaWrapper,
  SelectedCountryImg,
  Statistic,
  StatisticText,
  StyledTable,
  VerticalSeparator,
} from "./styles";
import { Header } from "../../components";
import { formatValueToString } from "../../helpers";
import { useMemo } from "react";

type CountryDetailsProps = {
  countriesData: Country[];
};

const CountryDetails: React.FC<CountryDetailsProps> = ({ countriesData }) => {
  const location = useLocation();
  const country = location.state?.country as Country;

  const tableData = [
    {
      text: "Capital",
      capitalName: formatValueToString(country.capital),
    },
    {
      text: "Subregion",
      capitalName: formatValueToString(country.subRegion),
    },
    {
      text: "Language",
      capitalName: formatValueToString(country.languages),
    },
    {
      text: "Currencies",
      capitalName: formatValueToString(country.currencies),
    },
    {
      text: "Continents",
      capitalName: formatValueToString(country.region),
    },
  ];

  const neighbors = useMemo(() => {
    return country.borders
      ?.map((borderCode) => {
        const neighborCountry = countriesData.find(
          (c) => c.cca3 === borderCode
        );
        return neighborCountry
          ? {
              name: neighborCountry.name.common,
              flag: neighborCountry.flags.svg,
            }
          : null;
      })
      .filter(Boolean);
  }, [country.borders, countriesData]);

  if (!country) {
    return <div>No country data available.</div>;
  }
  return (
    <CountryDetailsContainer>
      <Header />
      <CountryDetailsContent>
        <SelectedCountryImg
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          width="100"
        />
        <CountryNameWrapper>
          <Name>{country.name.common}</Name>
          <NativeName>
            {country.name?.official
              ? country.name?.official
              : country.name.common}
          </NativeName>
          <PopulationAndAreaWrapper>
            <Statistic>
              <StatisticText>Population</StatisticText>
              <VerticalSeparator />
              <StatisticText>
                {country.population.toLocaleString()}
              </StatisticText>
            </Statistic>
            <Statistic>
              <StatisticText>Area (km²)</StatisticText>
              <VerticalSeparator />
              <StatisticText>
                {country.area?.toLocaleString() || "N/A"}
              </StatisticText>
            </Statistic>
          </PopulationAndAreaWrapper>
        </CountryNameWrapper>

        <StyledTable>
          <tbody>
            {!!tableData &&
              tableData.map((item) => (
                <tr key={item.text}>
                  <td>{item.text}</td>
                  <td>{item.capitalName}</td>
                </tr>
              ))}
          </tbody>
        </StyledTable>
        <NeighbourCountriesWrapper>
          <NeighbourCountriesLabel>Neighbour Countries</NeighbourCountriesLabel>
          <ul>
            {neighbors && neighbors.length > 0 ? (
              neighbors.map((neighbor) => (
                <NeighbourCountry key={neighbor?.name}>
                  <img src={neighbor?.flag} width="40" />
                  <span>{neighbor?.name}</span>
                </NeighbourCountry>
              ))
            ) : (
              <li>No neighboring countries</li>
            )}
          </ul>
        </NeighbourCountriesWrapper>
      </CountryDetailsContent>
    </CountryDetailsContainer>
  );
};

export default CountryDetails;
