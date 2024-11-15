import { useEffect, useState } from "react";

import logo from "/Logo.svg";

import { AppContainer, Header, MainContent } from "./appStyles";
import { Table, TableFilters } from "./components";
import { useDebounce } from "./hooks";
import { Hourglass } from "react-loader-spinner";

function App() {
  const [countriesData, setCountriesData] = useState();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("population");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [statusName, setStatusName] = useState<string[]>(["All"]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCountriesData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      setIsLoading(true);
      const data = await response.json();
      setCountriesData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching countries data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  const term = useDebounce(search, 500) as string;

  return (
    <AppContainer>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      {isLoading ? (
        <Hourglass
          visible={true}
          height="50%"
          width="50%"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          colors={["#646669", "#59606b"]}
        />
      ) : (
        <MainContent>
          <TableFilters
            search={search}
            setSearch={setSearch}
            countriesData={countriesData}
            sort={sort}
            setSort={setSort}
            setSelectedRegion={setSelectedRegion}
            setStatusName={setStatusName}
            statusName={statusName}
          />
          <Table
            countriesData={countriesData}
            term={term}
            sort={sort}
            selectedRegion={selectedRegion}
            statusName={statusName}
          />
        </MainContent>
      )}
    </AppContainer>
  );
}

export default App;
