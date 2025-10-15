import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import CampusLandingPage from "./pages/CampusLandingPage";
import Dashboard from "./pages/Dashboard";
import AuthWrapper from "./components/Auth/AuthWrapper";
import CampusSearchResults from "./pages/CampusSearchResults";
import CampusSpotListingForm from "./pages/CampusSpotListingForm";
import { createContext, useState } from "react";
import CampusDashboard from "./pages/CampusDashboard.jsx";

// Exporting the useContext
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext(null);

const App = () => {
  const [listings, setListings] = useState([]);

  const handleAddListing = (newListing) => {
    setListings((prev) => [...prev, newListing]);
  };

  const handleRemoveListing = (id) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<CampusLandingPage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />

        {/* Clerk Authentication Routes */}
        <Route path="/sign-in" element={<AuthWrapper type="sign-in" />} />
        <Route path="/sign-up" element={<AuthWrapper type="sign-up" />} />

        {/* Listing Form */}
        <Route
          path="/listingForm"
          element={<CampusSpotListingForm onAddListing={handleAddListing} />}
        />

        {/* Dashboard */}
        <Route path="/dashboard" element={<CampusDashboard />} />
      </Route>
    )
  );

  return (
    <UserContext.Provider value={{ listings, setListings, handleRemoveListing }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
};

export default App;