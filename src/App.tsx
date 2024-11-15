import { Route, Routes } from "react-router-dom";
import { CountryDetails, Home } from "./pages";
import { AppContainer } from "./AppStyles";
import { useEffect, useState } from "react";

const App = () => {
  const [countriesData, setCountriesData] = useState([]);
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

  return (
    <AppContainer>
      <Routes>
        <Route
          path="/"
          element={<Home countriesData={countriesData} isLoading={isLoading} />}
        />
        <Route
          path="country-details"
          element={<CountryDetails countriesData={countriesData} />}
        />
      </Routes>
    </AppContainer>
  );
};

export default App;
