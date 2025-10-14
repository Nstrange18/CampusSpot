import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import CampusSearchResults from "./pages/CampusSearchResults";
import CampusSignInUser from "./components/Registration/CampusSignInUser";
import CampusSignInLandlord from "./components/Registration/CampusSignInLandlord";
import CampusLoginPage from "./components/Registration/CapmusLoginPage";
import CampusLandingPage from "./pages/CampusLandingPage";
import { SignIn, SignUp } from "@clerk/clerk-react";
import Dashboard from "./pages/Dashboard";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* Public pages */}
        <Route index element={<CampusLandingPage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />

        {/* Clerk authentication routes */}
        <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />

        {/* Protected route (for logged-in landlords) */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
