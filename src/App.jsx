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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<CampusLandingPage />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />

        {/* Clerk Authentication Routes */}
        <Route path="/sign-in" element={<AuthWrapper type="sign-in" />} />
        <Route path="/sign-up" element={<AuthWrapper type="sign-up" />} />

        {/* Protected Route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
