import React, { useContext, forwardRef } from "react";
import { Icon } from "@iconify/react";
import { DashboardContext } from "../Context/DashboardContext";
import '../../../styles/Sidebar.css'
// forwardRef((props, ref)
const Sidebar = forwardRef((props, ref) => {
  const { isSidebarOpen } = useContext(DashboardContext);

  return (
    <div ref={ref} className={`Sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebarList">
        <div className="listItem" >
          <Icon icon="mdi:home" width={'30px'} height={'30px'}/>
          <p>Home</p>
        </div>
        <div  className="listItem" >
         <img
          src="5554211.png"
          alt="Avatar"
          width={'25px'}
          height={'25px'}
        />
         <p>Dashboard</p>
        </div>
        <div  className="listItem">
          <Icon icon="mdi:account" width={'30px'} height={'30px'}/>
         <p>Profile</p>
        </div>
       
      </div>
    </div>
  );
});

export default Sidebar;
