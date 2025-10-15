import { useState } from "react";
import "../../styles/CampusSpotListingForm.css";
import { useNavigate } from "react-router-dom";

const CampusSpotListingForm = ({ onAddListing }) => {
  const navigate = useNavigate();
  const [university, setUniversity] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [formPhotoData, setFormPhotoData] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    const isRawFile = formPhotoData instanceof File;

    e.preventDefault();

    const listingData = {
      university,
      formPhotoData: isRawFile ? {
        document: formPhotoData,
        preview: URL.createObjectURL(formPhotoData)
      } : null,
      propertyAddress,
      roomType,
      price,
      amenities,
      description
    };
    
    onAddListing(listingData);
    navigate("/dashboard");
  };

  const handleAmenitesCheck = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setAmenities((prev) => (
        [...prev, value] // adding the checked values
      ));
    } else {
      setAmenities((prev) => (
        prev.filter((item) => item !== value) // Removing the checked values
      ));
    }
  };

  return (
    <div className="listing-form-container">
      <main className="form-main">
        <h1 className="heading">Add a New Property Listing</h1>
        <p className="heading-paragraph">
          Fill in the details below to get your property listed.
        </p>

        <form onSubmit={handleSubmit} action="">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="university">University</label>
              <select
                id="university"
                value={university}
                name="university"
                required
                onChange={(e) => setUniversity(e.target.value)}
              >
                <option value="">Select University</option>
                <option value="Stanford University">Stanford </option>
                <option value="Cambridge">Cambridge</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="propertyAddress">Property Address</label>
              <input
                type="text"
                value={propertyAddress}
                placeholder="123 Anywhere Street"
                onChange={(e) => setPropertyAddress(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price-per-month">Price per Month ($)</label>
              <input
                type="number"
                value={price}
                placeholder="eg., 800"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="room-type">Room Type</label>
              <select
                id="room-type"
                value={roomType}
                name="room-type"
                required
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="">Select Room Type</option>
                <option value="Stanford University">Studio </option>
                <option value="Cambridge">1 bedroom</option>
                <option value="Cambridge">2 bedroom</option>
                <option value="Cambridge">Shared Room</option>
              </select>
            </div>

            <div className="form-group2">
              <label htmlFor="textarea">Description</label>
              <textarea
                id="description"
                name="description"
                placeholder="Describe your property's best features for students..."
                value={description}
                rows="4"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group2">
              <label>Upload Room Photo</label>
              <div
                className="upload-box"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) {
                    setFormPhotoData((prev) => ({
                      ...prev,
                      document: file,
                      preview: URL.createObjectURL(file),
                    }));
                  }
                }}
              >
                <input
                  type="file"
                  id="fileUpload"
                  name="document"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setFormPhotoData((prev) => ({
                        ...prev,
                        document: file,
                        preview: URL.createObjectURL(file),
                      }));
                    }
                  }}
                  required
                  hidden
                />

                {!formPhotoData.preview ? (
                  <label htmlFor="fileUpload" className="upload-area">
                    <img
                      src="/public/upload-to-cloud-icon.png"
                      alt="Upload"
                      className="upload-img-icon"
                    />
                    <p>
                      <span className="upload-link">Upload a file</span> or drag
                      and drop
                    </p>
                    <p className="upload-subtext">PNG, JPG, GIF up to 10MB</p>
                  </label>
                ) : (
                  <div className="preview-container">
                    <img
                      src={formPhotoData.preview}
                      alt="Preview"
                      className="preview-img"
                    />
                    <p className="file-name">{formPhotoData.document?.name}</p>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() =>
                        setFormPhotoData((prev) => ({
                          ...prev,
                          document: null,
                          preview: null,
                        }))
                      }
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="form-group3">
            <label className="group3-label" htmlFor="amenities">
              Amenities
            </label>

            <div className="each-amenity">
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="wifi"
                  value="wifi"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="wifi">Wifi</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="power"
                  value="power"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="power">Power Supply</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="water"
                  value="water"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="water">Water</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="gym"
                  value="gym"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="gym">Gym</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="Laundry"
                  value="Laundry"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="Laundry">Laundry</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="Retail Outlet (S  hops)"
                  value="Retail Outlet (Shops)"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="Retail Outlet (Shops)">
                  Retail Outlet (Shops)
                </label>
              </div>
            </div>
          </div>

          <button className="submit-btn" type="submit">
            Submit Listing
          </button>
        </form>
      </main>
    </div>
  );
};

export default CampusSpotListingForm;
