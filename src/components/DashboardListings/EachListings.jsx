import { useContext } from "react";
import { UserContext } from "../../App";

const EachListings = ({ onEdit }) => {
  const { listings, handleRemoveListing } = useContext(UserContext);

  return (
    <div>
      {listings.length === 0 ? (
        <p className="no-listings">No listings available.</p>
      ) : (
        listings.map((listing, index) => {
          const wasJustUpdated = Date.now() - listing.lastUpdated < 60;
          return (
            <ul className="a" key={index}>
              <li className="propertys">
                {listing.photo?.preview && (
                  <img
                    src={listing.photo.preview}
                    alt="Uploaded Room"
                    className="propertyImage"
                  />
                )}
              </li>
              <li>
                <div>
                  <h3
                    id="propertyAddresses"
                  >
                    {listing.propertyAddress}
                  </h3>
                  {wasJustUpdated && <span className="just-edited-badge">Edited just now</span>}
                </div>
              </li>

              <li>
                {listing.status === "Active" && <p id="active">Active</p>}
                {listing.status === "Pending" && <p id="pending">Pending</p>}
                {listing.status === "Rented" && <p id="rented">Rented</p>}
              </li>

              <li>{listing.university}</li>
              <li>{listing.roomType}</li>
              <li>${listing.price}</li>
              <li className="dbtn">
                <button
                  onClick={() => {
                    onEdit(listing);
                  }}
                >
                  <img src="edit 2.png" alt="" />
                </button>
                <button onClick={() => handleRemoveListing(listing.id)}>
                  <img src="delete.png" alt="" />
                </button>
              </li>
            </ul>
          );
        })
      )}
    </div>
  );
};

export default EachListings;
