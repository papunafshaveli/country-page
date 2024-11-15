import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountryDetails, Home } from "./pages";
import { AppContainer } from "./appStyles";
import { Hourglass } from "react-loader-spinner";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppContainer>
          <Home countriesData={countriesData} isLoading={isLoading} />
        </AppContainer>
      ),
    },
    {
      path: "country-details",
      element: (
        <AppContainer>
          {isLoading ? (
            <Hourglass
              visible={true}
              height="50%"
              width="50%"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass="loader_in_details"
              colors={["#646669", "#59606b"]}
            />
          ) : (
            <CountryDetails countriesData={countriesData} />
          )}
        </AppContainer>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
