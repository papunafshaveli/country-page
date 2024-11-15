# Country Details Project

This is a React-based project that fetches and displays information about countries using a public API. The project features a country details page where users can explore information about a specific country, including its population, area, and neighboring countries. The project also allows navigation to the details of neighboring countries.

## Features

- Displays detailed information about a selected country (capital, subregion, language, currencies, area, population).
- Shows neighboring countries and allows users to navigate to their details pages.
- Utilizes React Router for routing between the home page and country details page.
- Uses a public API (`https://restcountries.com/v3.1/all`) to fetch country data.

## Tech Stack

- **React** (with functional components and hooks)
- **TypeScript**
- **React Router** (for navigation)
- **CSS-in-JS** (using styled-components for styling)
- **Fetch API** (for retrieving country data)

## Components and Flow

**Home Page (Home.tsx)**

- Displays a list of countries fetched from the API.
- Each country can be clicked to navigate to the country details page.

**Country Details Page (CountryDetails.tsx)**

- Displays detailed information about the selected country (name, population, area, etc.).
- Lists neighboring countries and allows navigation to their details pages.

**Header Component (Header.tsx)**

- Displays the header across all pages.

## Usage

- After setting up the project and running it, you can:

- Navigate to the home page where a list of all countries will be shown.
- Click on a country to view detailed information about it, such as its population, area, language, and neighboring countries.
- Click on a neighboring country to navigate to its respective details page.
