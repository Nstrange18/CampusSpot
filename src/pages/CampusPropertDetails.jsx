import React from 'react';
// import '../../styles/CampusPropertyDetails.css';
import ImageSlider from '../components/PropertyDetails/ImageSlider';
// import Modal from '../components/PropertyDetails/modalPopUp';
import { useState } from 'react';
const CampusPropertDetails = () => {
  // const [openModal, setOpenModal] = useState(false);
  const slides = [
    { url: 'huga.jpg', title: 'First Image' },
    { url: 'rooms3.jpg', title: 'Second Image' },
    { url: 'rooms2.jpg', title: 'Third Image' },
    { url: 'rooms.jpg', title: 'Fourth Image' },
  ];
  const containerStyle = {
    width: '500px',
    maxWidth: '550px',
    height: '300px',
    margin: '0 auto',
  };
  return (
    <>
      <div className="container">
        <header>
          <img src="logo (1).png" alt="logo" />
          <h1>CampusSpot</h1>
        </header>

        <div className="propertyImages">
          <img id="firstImage" src="huga.jpg" alt="FirstImage" />
          <div className="big2">
            <img id="secondImage" src="rooms3.jpg" alt="secondImage" />
            <div className="big3">
              <img id="thirdImage" src="rooms2.jpg" alt="thirdImage" />
              <img id="fourthImage" src="rooms.jpg" alt="fourthImage" />
            </div>
            <div className="slider-container" style={containerStyle}>
              <ImageSlider slides={slides}/>
            </div>
          </div>
        </div>
        <div className="second">
          <div className="AboutProperty">
            <div className="propertyDetails">
              <h1>Spacious 2 bedroom flat</h1>
              <p id="propertyAddress">55 somewhere place</p>
              <span>
                <p id="rooms">2 beds </p> . <p id="baths">2 baths </p> . <p id="size"> 1200sqft </p>
              </span>
            </div>
            <hr />
            <div className="propertyLandlord">
              <img id="landlordImage" src="rooms.jpg" alt="" />
              <div>
                <span>
                  Owner : Hosted by<p id="landlordName">. Olachi</p>
                </span>
                <p>Verified Owner</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="priceandwarning">
            <p>
              <span id="propertPrice">#2000</span> / month
            </p>
              <button className="contactPopUp" id="contactbtn">Contact LandLord</button>
              {/* {openModal && <Modal setOpenModal={setOpenModal} />} */}
            <div className="bewareMessage">
              <img src="warning sign.png" alt="" />
              <p>
                Be cautious of scams. Always verify details with the landlord before sending money
              </p>
            </div>
          </div>
        </div>
        <div className="Amenities">
          <h2>Amenities</h2>
          <ul className="propertyAmenities">
            {/* <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
            <li>f</li>
            <li>g</li>
            <li>h</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CampusPropertDetails;