import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
<<<<<<< HEAD
=======
import AuthWrapper from "./components/Auth/AuthWrapper.jsx";
>>>>>>> 46f4e58b803a99962b58f6555c72d976d69279c3
import CampusSearchResults from "./pages/CampusSearchResults";
import CampusSignInUser from "./components/Registration/CampusSignInUser";
import CampusSignInLandlord from "./components/Registration/CampusSignInLandlord";
import CampusLoginPage from "./components/Registration/CapmusLoginPage";
<<<<<<< HEAD
import CampusLandingPage from "./pages/CampusLandingPage";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";

=======
import CampusLandingPage from "./pages/CampusLandingPage.jsx";
import { createContext, useState } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";
import CampusDashboard from "./pages/CampusDashboard.jsx";

// Exporting the useContext
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext(null);
>>>>>>> 46f4e58b803a99962b58f6555c72d976d69279c3

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
<<<<<<< HEAD
        {/* Public pages */}
        <Route index element={<CampusLandingPage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
=======
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
>>>>>>> 46f4e58b803a99962b58f6555c72d976d69279c3

        {/* Clerk authentication routes */}
        <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />

        {/* Protected route (for logged-in landlords) */}
<<<<<<< HEAD
        <Route path="/dashboard" element={<Dashboard />} />
=======
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
>>>>>>> 46f4e58b803a99962b58f6555c72d976d69279c3
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
