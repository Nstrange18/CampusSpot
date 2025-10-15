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
import CampusSignInLandlord from "./components/Registration/CampusSignInLandlord"
import CampusLoginPage from "./components/Registration/CapmusLoginPage"


const App = () => {
  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
          <Route index element={<CampusLoginPage />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
        </Route>
      )
    );
  return (
    <div>
      <UserContext.Provider value={{ listings, setListings, handleRemoveListing }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
>>>>>>> 3f047019f2aca144cef030ed4dd7e8ff0d179399
};

export default App;
