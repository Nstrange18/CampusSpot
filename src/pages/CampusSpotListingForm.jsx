import "../../styles/CampusSpotListingForm.css";
import { useState, useEffect } from "react";

const CampusSpotListingForm = ({
  onSubmit,
  setIsOpen,
  editingListing,
}) => {
  const [university, setUniversity] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [status, setStatus] = useState();
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const [amenities, setAmenities] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingListing) {
      setUniversity(editingListing.university || "");
      setPropertyAddress(editingListing.propertyAddress || "");
      setStatus(editingListing.status || "");
      setRoomType(editingListing.roomType || "");
      setPrice(editingListing.price || "");
      setPhoto(editingListing.photo || null);
      setAmenities(editingListing.amenities || []);
      setDescription(editingListing.description || "");
    }
  }, [editingListing]);

  // Convert Image file to base64 so that it may persist after reload together with the rest of the listing
  const handleFileChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Save Base64 instead of blob
        setPhoto({
          file,
          preview: reader.result, // Base64 string here
        });
      };
      reader.readAsDataURL(file); // Convert to Base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const listingData = {
      id: editingListing?.id || Date.now(),
      university,
      photo,
      propertyAddress,
      roomType,
      price,
      amenities,
      status,
      description,
    };

    onSubmit(listingData); // Works for both Add & Edit
    setIsOpen(false);
  };

  const handleAmenitesCheck = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setAmenities((prev) => [...prev, value]); // adding the checked values
    } else {
      setAmenities(
        (prev) => prev.filter((item) => item !== value) // Removing the checked values
      );
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
                <option value="1 bedroom">1 bedroom</option>
                <option value="2 bedroom">2 bedroom</option>
                <option value="Shared Room">Shared Room</option>
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
                  handleFileChange(e.dataTransfer.files[0]); // ✅ updated drop handler
                }}
              >
                <input
                  type="file"
                  id="fileUpload"
                  name="document"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e.target.files[0])}
                  required={!editingListing}
                  hidden
                />

                {!photo?.preview ? (
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
                      src={photo.preview}
                      alt="Preview"
                      className="preview-img"
                    />
                    <p className="file-name">{photo.document?.name}</p>
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => setPhoto(null)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="form-group3">
            <label className="group3-label" htmlFor="Status">
              Status
            </label>

            <div className="each-amenity">
              <div className="each-amenity-div">
                <input
                  type="radio"
                  name="Status"
                  value="Active"
                  checked={status === "Active"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="Active">Active</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="radio"
                  name="Status"
                  value="Pending"
                  checked={status === "Pending"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="Pending">Pending</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="radio"
                  name="Status"
                  value="Rented"
                  checked={status === "Rented"}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <label htmlFor="Rented">Rented</label>
              </div>
            </div>

            <label className="group3-label" htmlFor="Amenities">
              Amenities
            </label>

            <div className="each-amenity">
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="Wifi"
                  value="Wifi"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="Wifi">Wifi</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="Power"
                  value="Power"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="Power">Power Supply</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="Water"
                  value="Water"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="Water">Water</label>
              </div>
              <div className="each-amenity-div">
                <input
                  type="checkbox"
                  name="Gym"
                  value="Gym"
                  onChange={handleAmenitesCheck}
                />
                <label htmlFor="Gym">Gym</label>
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
