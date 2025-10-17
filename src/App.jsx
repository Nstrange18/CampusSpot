import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import AuthWrapper from "./components/Auth/AuthWrapper.jsx";
import CampusSearchResults from "./pages/CampusSearchResults";
import CampusSpotListingForm from "./pages/CampusSpotListingForm";
import CampusLandingPage from "./pages/CampusLandingPage.jsx";
import { createContext, useEffect, useState } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import CampusDashboard from "./pages/CampusDashboard.jsx";
import { DashboardProvider } from "./components/Context/DashboardContext.jsx";
import CampusPropertyDetails from "./pages/CampusPropertyDetails.jsx";

// Exporting the useContext
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext(null);

const App = () => {
  const [listings, setListings] = useState(() => {
    const savedListings = localStorage.getItem("campusspot-listings");
    return savedListings ? JSON.parse(savedListings) : [];
  });

  useEffect(() => {
    localStorage.setItem("campusspot-listings", JSON.stringify(listings));
  }, [listings]);

  const handleAddListing = (newListing) => {
    // Give each listing a unique ID
    const listingWithId = { ...newListing, id: Date.now() };
    setListings((prev) => [...prev, listingWithId]);
  };

  const handleRemoveListing = (id) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<CampusDashboard />} />

        <Route
          path="/listingForm"
          element={<CampusSpotListingForm onSubmit={handleAddListing} />}
        />

        <Route path="/dashboard" element={<CampusDashboard />} />

        {/* Clerk Authentication Routes */}
        <Route path="/sign-in" element={<AuthWrapper type="sign-in" />} />
        <Route path="/sign-up" element={<AuthWrapper type="sign-up" />} />

        {/* Protected route (for logged-in landlords) */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Route>
    )
  );
  return (
    <div>
      <UserContext.Provider
        value={{ listings, setListings, handleRemoveListing, handleAddListing }}
      >
        <DashboardProvider>
          <RouterProvider router={router} />
        </DashboardProvider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
