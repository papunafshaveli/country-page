import { useEffect, useState } from "react";
import { AppContainer, Header, MainContent } from "./appStyles";
import logo from "/Logo.svg";
import Table from "./components/table/Table";
import TableFilters from "./components/table-filters/TableFilters";

function App() {
  const [countriesData, setCountriesData] = useState();

  const fetchCountriesData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountriesData(data);
  };

  useEffect(() => {
    fetchCountriesData();
  }, []);

  return (
    <AppContainer>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <MainContent>
        <TableFilters />
        <Table countriesData={countriesData} />
      </MainContent>
    </AppContainer>
  );
}

export default App;
