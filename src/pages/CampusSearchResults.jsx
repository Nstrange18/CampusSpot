import { useMemo, useState, useEffect } from "react";
import "../../styles/CampusSearchResults.css";
import CampusSpotNavbar from "../components/SearchResult/CampusSpotNavbar";
import FiltersSearchResult from "../components/SearchResult/FiltersSearchResult";
import SearchResultCards from "../components/SearchResult/SearchResultCards";

const APARTMENTS = [
  {
    id: 1,
    image: "/Screenshot 2025-10-06 095023.png",
    title: "Spacious 2-bedroom apartment",
    moneyPerMonth: "$2,500 / month",
    address: "123 Main St, Stanford, CA",
  },
  {
    id: 2,
    image: "/Screenshot 2025-10-06 095920.png",
    title: "Cozy studio near campus",
    moneyPerMonth: "$1,800 / month",
    address: "456 Elm St, Stanford, CA",
  },
  {
    id: 3,
    image: "/Screenshot 2025-10-06 095929.png",
    title: "Modern 1-bedroom apartment",
    moneyPerMonth: "$2,200 / month",
    address: "789 Oak St, Stanford, CA",
  },
  {
    id: 4,
    image: "/Screenshot 2025-10-06 095929.png",
    title: "Modern 1-bedroom apartment",
    moneyPerMonth: "$2,200 / month",
    address: "789 Oak St, Stanford, CA",
  },
  {
    id: 5,
    image: "/Screenshot 2025-10-06 095929.png",
    title: "Modern 1-bedroom apartment",
    moneyPerMonth: "$2,200 / month",
    address: "789 Oak St, Stanford, CA",
  },
  // …add more items here or pass a filtered array via props
];

const PAGE_SIZE = 2; // show 2 cards per page (matches your screenshot)

const CampusSearchResults = () => {
  const [page, setPage] = useState(1); // 1-indexed

  const totalPages = Math.max(1, Math.ceil(APARTMENTS.length / PAGE_SIZE));

  const visibleItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return APARTMENTS.slice(start, start + PAGE_SIZE);
  }, [page]);

  const prev = () => setPage(p => Math.max(1, p - 1));
  const next = () => setPage(p => Math.min(totalPages, p + 1));

  // optional nicety: scroll to top of results on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <section className="body-grid">
      <CampusSpotNavbar />
      <FiltersSearchResult />

      <main>
        <h1>Apartments near Stanford University</h1>
        <p className="results-number">{APARTMENTS.length} results found</p>

        {/* Render only the items for the current page */}
        {visibleItems.map(apt => (
          <SearchResultCards
            key={apt.id}
            image={apt.image}
            title={apt.title}
            moneyPerMonth={apt.moneyPerMonth}
            address={apt.address}
          />
        ))}

        {/* Pagination footer */}
        <footer className="pager">
          <button onClick={prev} disabled={page === 1} aria-label="Previous">
            <img src="/left-arrow-icon.png" alt="" />
          </button>

          <div className="page-indicator">
            {page} / {totalPages}
          </div>

          <button onClick={next} disabled={page === totalPages} aria-label="Next">
            <img src="/right-arrow-icon.png" alt="" />
          </button>
        </footer>
      </main>
    </section>
  );
};

export default CampusSearchResults;
