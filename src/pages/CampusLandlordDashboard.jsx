import "../../styles/CampusDashboardListing.css";
import { useNavigate } from "react-router-dom";

function Dashboard({ listings }) {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h2>All Listings</h2>
      <button onClick={() => navigate("/listingForm")}>Add New Listing</button>
      {listings.length === 0 ? (
        <p>No listings available.</p>
      ) : (
        listings.map((listing, index) => (
          <div key={index} className="listing-card">
            <h3>Listing {index + 1}</h3>
            <p>
              <strong>University:</strong> {listing.university}
            </p>
            <p>
              <strong>Address:</strong> {listing.address}
            </p>
            <p>
              <strong>Price:</strong> ${listing.price}
            </p>
            <p>
              <strong>Room Type:</strong> {listing.roomType}
            </p>
            <p>
              <strong>Description:</strong> {listing.description}
            </p>
            <p>
              <strong>Amenities:</strong> {listing.amenities?.join(", ")}
            </p>
            {listing.photo?.preview && (
              <img
                src={listing.photo.preview}
                alt="Uploaded Room"
                className="preview-img"
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;
