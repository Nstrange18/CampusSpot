import "../../styles/CampusSearchResults.css";
import CampusSpotNavbar from "../components/SearchResult/CampusSpotNavbar";
import FiltersSearchResult from "../components/SearchResult/FiltersSearchResult";
import SearchResultCards from "../components/SearchResult/SearchResultCards";

const CampusSearchResults = () => {
  return (
    <section className="body-grid">
      <CampusSpotNavbar />

      <FiltersSearchResult />

      <main>
        <h1>Apartments near Stanford University</h1>
        <p className="results-number">123 results found</p>

        <SearchResultCards 
          image={"/Screenshot 2025-10-06 095023.png"}
          title="Spacious 2-bedroom apartment"
          moneyPerMonth="$2,500 / month"
          address="123 Main St, Stanford, CA"
        />

        <SearchResultCards 
          image={"/Screenshot 2025-10-06 095920.png"}
          title="Cozy studio near campus"
          moneyPerMonth="$1,800 / month"
          address="456 Elm St, Stanford, CA"
        />

        <SearchResultCards 
          image={"/Screenshot 2025-10-06 095929.png"}
          title="Modern 1-bedroom apartment"
          moneyPerMonth="$2,200 / month"
          address="789 Oak St, Stanford, CA"
        />


        <footer>
          <button>
            <img src="/left-arrow-icon.png" alt="" />
          </button>
          <div>1</div>
          <button>
            <img src="/right-arrow-icon.png" alt="" />
          </button>
        </footer>
      </main>
    </section>
  );
};

export default CampusSearchResults;
