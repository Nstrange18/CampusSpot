import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import CampusSearchResults from "./pages/CampusSearchResults";
import CampusSpotListingForm from "./pages/CampusSpotListingForm";
import CampusSignInUser from "./components/Registration/CampusSignInUser";
import CampusSignInLandlord from "./components/Registration/CampusSignInLandlord";
import CampusLoginPage from "./components/Registration/CapmusLoginPage";
import CampusLandingPage from "./pages/CampusLandingPage.jsx";
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

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route 
          index element={<CampusLandingPage />} 
        />
  
        <Route
          index
          path="/listingForm"
          element={<CampusSpotListingForm onAddListing={handleAddListing} />}
        />

        <Route
          path="/dashboard"
          element={<CampusDashboard listings={listings} />}
        />
        <Route path="contact" element={<h1>Contact</h1>} />

        {/* Clerk authentication routes */}
        <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />

        {/* Protected route (for logged-in landlords) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  );
  return (
    <div>
      <UserContext.Provider>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
};

export default App;
