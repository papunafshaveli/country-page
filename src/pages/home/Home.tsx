import React, { useState } from "react";

import { HomeContainer, MainContent } from "./styles";
import { Header, Table, TableFilters } from "../../components";
import { useDebounce } from "../../hooks";
import { Hourglass } from "react-loader-spinner";
import { Country } from "../../types";

type HomeProps = {
  countriesData: Country[];
  isLoading: boolean;
};

const Home: React.FC<HomeProps> = ({ countriesData, isLoading }) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("population");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [statusName, setStatusName] = useState<string[]>(["All"]);

  const term = useDebounce(search, 500) as string;

  return (
    <HomeContainer>
      <Header />
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
    </HomeContainer>
  );
};

export default Home;
