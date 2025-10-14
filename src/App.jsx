import "./App.css";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import CampusSearchResults from "./pages/CampusSearchResults";


const App = () => {
  // const [listings, setListings] = useState([]);

  // const handleAddListing = (newListing) => {
  //   setListings((prev) => [...prev, newListing]);
  // };

  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
          <Route index element={<CampusSearchResults />} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
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
