import { useEffect, useState } from "react";

import { AppContainer, Header, MainContent } from "./appStyles";
import logo from "/Logo.svg";
import Table from "./components/table/Table";
import TableFilters from "./components/table-filters/TableFilters";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [countriesData, setCountriesData] = useState();
  const [search, setSearch] = useState("");

  const fetchCountriesData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountriesData(data);
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
      <MainContent>
        <TableFilters
          search={search}
          setSearch={setSearch}
          countriesData={countriesData}
        />
        <Table countriesData={countriesData} term={term} />
      </MainContent>
    </AppContainer>
  );
}

export default App;
