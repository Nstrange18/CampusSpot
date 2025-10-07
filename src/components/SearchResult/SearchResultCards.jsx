const SearchResultCards = ({ title, moneyPerMonth, address, image }) => {
  return (
    <div className="result-card">
      <img
        src={image}
        className="result-images"
        alt=""
      />

      <div className="results-writeups">
        <h2>{title}</h2>
        <h3>{moneyPerMonth}</h3>
        <p>
          {address}
        </p>

        <div className="available-amenities">
          <div>
            <img src="/wifi-icon.png" alt="" className="amenities-icon" />
            Wifi
          </div>
          <div>
            <img src="/laundry-icon.png" alt="" className="amenities-icon" />
            Laundry
          </div>
        </div>
      </div>

      <button className="writeup-button">Contact Landlord</button>
    </div>
  );
};

export default SearchResultCards;
