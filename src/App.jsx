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
import { createContext, useState } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import CampusDashboard from "./pages/CampusDashboard.jsx";

// Exporting the useContext
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext(null);

const App = () => {
  const [listings, setListings] = useState([]);

  const handleAddListing = (newListing) => {
    setListings((prev) => [...prev, newListing]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route 
          index element={<CampusDashboard />} 
        />
  
        <Route
          path="/listingForm"
          element={<CampusSpotListingForm onAddListing={handleAddListing} />}
        />

        <Route
          path="/dashboard"
          element={<CampusDashboard listings={listings} />}
        />

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
      <UserContext.Provider value={{ listings, setListings }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
};

export default App;
