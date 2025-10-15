import React from 'react'
import '../../styles/CampusDashboard.css';

const CampusDashboard = () => {
  return (
    <>
      <div className='container1'>
         <header>
          <div>
              <img src="logo (1).png" alt="logo" />
              <h1>CampusSpot</h1>
          </div>
    
          <div className='avatar'>
            <img id='dashboardAvatar' src="IMG-20250427-WA0143.jpg" />
          </div>
        </header>
        <div className='welcomeboard'>
            <div>
                <h1>My Dashboard</h1>
                <p>Manage your property listings and monitor their performance.</p>
            </div>
            <button className='addPropertyBtn'>
              <span className='plus'>+</span>
                Add Property
            </button>
        </div>
        
        <div className="listings">
          <ul className='headings'>
              <li><span>..</span>Property</li>
              <li><span>.....................................</span>Status</li>
              <li><span>.........</span>Price</li>
              <li><span>.......</span>Views</li>
              <li>Applications</li>
              <li></li>
          </ul>
            <ul className='a'>
              <li className='propertys'>
                  <img id='propertyImage' src="huga.jpg" alt="" />
                  <div>
                      <h3 id='propertyAddresses'>Address</h3>
                      <p>somewhere</p>
                  </div>
              </li>
              <li>
                  <p id='active'>Active</p>
                  <p id='pending'>Pending</p>
                  <p id='rented'>Rented</p>
              </li>
              <li>#2500</li>
              <li>100</li>
              <li>10</li>
              <li className='dbtn'>
                <button><img src="edit 2.png" alt="" /></button>
                <button><img src="delete.png" alt="" /></button>
              </li>
          </ul>
            <ul className='p'>
              <li className='propertys'>
                  <img id='propertyImage' src="rooms.jpg" alt="" />
                  <div>
                      <h3 id='propertyAddresses'>Address</h3>
                      <p>somewhere</p>
                  </div>
              </li>
              <li>
                  <p id='active'>Active</p>
                  <p id='pending'>Pending</p>
                  <p id='rented'>Rented</p>
              </li>
              <li>#2500</li>
              <li>100</li>
              <li>10</li>
              <li className='dbtn'>
                <button><img src="edit 2.png" alt="" /></button>
                <button><img src="delete.png" alt="" /></button>
              </li>
          </ul>
            <ul className='last'>
              <li className='propertys'>
                  <img id='propertyImage' src="rooms2.jpg" alt="" />
                  <div>
                      <h3 id='propertyAddresses'>Address</h3>
                      <p>somewhere</p>
                  </div>
              </li>
              <li>
                  <p id='active'>Active</p>
                  <p id='pending'>Pending</p>
                  <p id='rented'>Rented</p>
              </li>
              <li>#2500</li>
              <li>100</li>
              <li>10</li>
              <li className='dbtn'>
                <button><img src="edit 2.png" alt="" /></button>
                <button><img src="delete.png" alt="" /></button>
              </li>
          </ul>
        </div> 
         <button className='addPropertyBtn2'>
              <span className='plus'>+</span>
                Add Property
            </button>   
      </div>
    </>
  )
}

export default CampusDashboard
