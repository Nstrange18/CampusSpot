import { useState } from "react";
import "../../styles/CampusDashboard.css";
import EachListings from "../components/DashboardListings/EachListings";
import CampusSpotListingForm from "./CampusSpotListingForm";
import { UserContext } from "../App";
import { useContext } from "react";

const CampusDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editingListing, setEditingListing] = useState(null);

  const { setListings } = useContext(UserContext);

  const handleAddOrUpdateListing = (listingData) => {
    const newData = {
      ...listingData,
      lastUpdated: Date.now(),
    };

    setListings((prev) => {
      const exists = prev.some((item) => item.id === newData.id);

      if (exists) {
        return prev.map((item) =>
          item.id === newData.id ? { ...item, ...newData } : item
        );
      } else {
        return [...prev, newData];
      }
    });

    setEditingListing(null);
    setIsOpen(false);
  };

  const handleEditClick = (listing) => {
    setEditingListing(listing); // set current listing into form
    setIsOpen(true); // open modal
  };

  const handleModal = () => {
    setEditingListing(null);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container1">
        <header>
          <div>
            <img src="logo (1).png" alt="logo" />
            <h1>CampusSpot</h1>
          </div>

          <div className="avatar">
            <img id="dashboardAvatar" src="IMG-20250427-WA0143.jpg" />
          </div>
        </header>
        <div className="welcomeboard">
          <div>
            <h1>My Dashboard</h1>
            <p>Manage your property listings and monitor their performance.</p>
          </div>

          <button className="addPropertyBtn" onClick={handleModal}>
            <span className="plus">+</span>
            Add Property
          </button>
        </div>

        <div className="listings">
          <ul className="headings">
            <li>Room Image</li>
            <li>
              Property <br /> Address
            </li>
            <li>Status</li>
            <li>University</li>
            <li>Room Type</li>
            <li>Price</li>
            <li></li>
          </ul>

          <EachListings onEdit={handleEditClick} />
        </div>

        {isOpen && (
          <div className="modal-overlay" onClick={handleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <CampusSpotListingForm
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onSubmit={handleAddOrUpdateListing}
                editingListing={editingListing}
              />
            </div>
          </div>
        )}

        <button className="addPropertyBtn2" onClick={handleModal}>
          <span className="plus">+</span>
          Add Property
        </button>
      </div>
    </>
  );
};

export default CampusDashboard;
