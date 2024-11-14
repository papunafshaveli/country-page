import { useEffect, useState } from "react";

import logo from "/Logo.svg";

import { AppContainer, Header, MainContent } from "./appStyles";
import { Table, TableFilters } from "./components";
import { useDebounce } from "./hooks";

function App() {
  const [countriesData, setCountriesData] = useState();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("population");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [statusName, setStatusName] = useState<string[]>(["All"]);

  const fetchCountriesData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountriesData(data);
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  const term = useDebounce(search, 500) as string;
  console.log(countriesData);

  return (
    <AppContainer>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
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
    </AppContainer>
  );
}

export default App;
