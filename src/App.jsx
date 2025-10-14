import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
<<<<<<< HEAD
import CampusSearchResults from "./pages/CampusSearchResults";
import CampusSpotListingForm from "./pages/CampusSpotListingForm";
import CampusSignInUser from "./components/Registration/CampusSignInUser";
import CampusSignInLandlord from "./components/Registration/CampusSignInLandlord";
import CampusLoginPage from "./components/Registration/CapmusLoginPage";
import CampusLandingPage from "./pages/CampusLandingPage.jsx";
import { createContext, useState } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import CampusDashboard from "./pages/CampusDashboard.jsx";

// Exporting the useContext
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext(null);
=======
import CampusLandingPage from "./pages/CampusLandingPage";
import Dashboard from "./pages/Dashboard";
import AuthWrapper from "./components/Auth/AuthWrapper";
>>>>>>> cf562d1539818be268920ec995455ca607601d4d

const App = () => {
  const [listings, setListings] = useState([]);

  const handleAddListing = (newListing) => {
    setListings((prev) => [...prev, newListing]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
<<<<<<< HEAD
        <Route 
          index element={<CampusDashboard />} 
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
=======
        <Route index element={<CampusLandingPage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
>>>>>>> cf562d1539818be268920ec995455ca607601d4d

        {/* Clerk Authentication Routes */}
        <Route path="/sign-in" element={<AuthWrapper type="sign-in" />} />
        <Route path="/sign-up" element={<AuthWrapper type="sign-up" />} />

<<<<<<< HEAD
        {/* Protected route (for logged-in landlords) */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
=======
        {/* Protected Route */}
        <Route path="/dashboard" element={<Dashboard />} />
>>>>>>> cf562d1539818be268920ec995455ca607601d4d
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
