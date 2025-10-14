import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
// import CampusSearchResults from "./pages/CampusSearchResults";
import CampusSpotListingForm from "./pages/CampusSpotListingForm";
// import CampusSignInUser from "./components/Registration/CampusSignInUser";
// import CampusSignInLandlord from "./components/Registration/CampusSignInLandlord"
import CampusLoginPage from "./components/Registration/CapmusLoginPage";
import CampusLandingPage from "./pages/CampusLandingPage.jsx";
// import { createContext, useState } from "react";
import CampusDashboard from "./pages/CampusDashboard.jsx";

// Exporting the useContext
// eslint-disable-next-line react-refresh/only-export-components
// export const UserContext = createContext(null);

const App = () => {
  // const [listings, setListings] = useState([]);

  // const handleAddListing = (newListing) => {
  //   setListings((prev) => [...prev, newListing]);
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<CampusSpotListingForm />} />
        {/* <Route 
          index element={<CampusLandingPage />} 
        /> */}
  
        {/* <Route
          index
          path="/listingForm"
          element={<CampusSpotListingForm onAddListing={handleAddListing} />}
        />

        <Route
          path="/dashboard"
          element={<CampusLandlordDashboard listings={listings} />}
        />
        <Route path="contact" element={<h1>Contact</h1>} /> */}
      </Route>
    )
  );
  return (
    <div>
        <RouterProvider router={router} />
      {/* <UserContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
};

export default App;
