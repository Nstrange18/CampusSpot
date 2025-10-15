const EachListings = ({listings}) => {
  return (
    <div>
      {listings.length === 0 ? (
        <p>No listings available.</p>
      ) : (
        listings.map((listing, index) => (
          <ul className="a" key={index}>
            <li className="propertys">
              {listing.photo?.preview && (
                <img
                  src={listing.photo.preview}
                  alt="Uploaded Room"
                  className="propertyImage"
                />
              )}
              <div>
                <h3 id="propertyAddresses">{listing.address}</h3>
              </div>
            </li>
            <li>
              <p id="active">Active</p>
              <p id="pending">Pending</p>
              <p id="rented">Rented</p>
            </li>
            <li>${listing.price}</li>
            <li>10</li>
            <li className="dbtn">
              <button>
                <img src="edit 2.png" alt="" />
              </button>
              <button>
                <img src="delete.png" alt="" />
              </button>
            </li>
          </ul>
        ))
      )}
    </div>
  );
};

export default EachListings;
