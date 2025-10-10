import { useState } from "react";
import "../../styles/CampusSpotListingForm.css";

const CampusSpotListingForm = () => {
  const [formData, setFormData] = useState([])
  return (
    <div className="listing-form-container">
      <main className="form-main">
        <h1 className="heading">Add a New Property Listing</h1>
        <p className="heading-paragraph">
          Fill in the details below to get your property listed.
        </p>

        <form action="">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="university">University</label>
              <select id="university" name="university" required>
                <option value="">Select University</option>
                <option value="Stanford University">Stanford </option>
                <option value="Cambridge">Cambridge</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="propertyAddress">Property Address</label>
              <input type="text" placeholder="123 Anywhere Street" />
            </div>

            <div className="form-group">
              <label htmlFor="price-per-month">Price per Month ($)</label>
              <input type="number" placeholder="eg., 800" />
            </div>

            <div className="form-group">
              <label htmlFor="room-type">Room Type</label>
              <select id="room-type" name="room-type" required>
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
                rows="4"
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
                  setFormData((prev) => ({
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
                accept=".png,.jpg,.jpeg,.gif"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setFormData((prev) => ({
                      ...prev,
                      document: file,
                      preview: URL.createObjectURL(file),
                    }));
                  }
                }}
                required
                hidden
              />

              {!formData.preview ? (
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
                    src={formData.preview}
                    alt="Preview"
                    className="preview-img"
                  />
                  <p className="file-name">{formData.document?.name}</p>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() =>
                      setFormData((prev) => ({
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
            <label className="group3-label" htmlFor="amenities">Amenities</label>

            <div className="each-amenity">
              <div>
                <input type="checkbox" name="wifi" id="wifi" />
                <label htmlFor="wifi">Wifi</label>
              </div>
              <div>
                <input type="checkbox" name="power" id="power" />
                <label htmlFor="power">Power Supply</label>
              </div>
              <div>
                <input type="checkbox" name="water" id="water" />
                <label htmlFor="water">Water</label>
              </div>
              <div>
                <input type="checkbox" name="wifi" id="wifi" />
                <label htmlFor="wifi">Wifi</label>
              </div>
              <div>
                <input type="checkbox" name="Laundry" id="Laundry" />
                <label htmlFor="Laundry">Laundry</label>
              </div>
              <div>
                <input type="checkbox" name="Retail Outlet (S  hops)" id="Retail Outlet (Shops)" />
                <label htmlFor="Retail Outlet (Shops)">Retail Outlet (Shops)</label>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CampusSpotListingForm;
