import React, { useState } from 'react';
import MenuItem from './MenuItem';
import { faHome, faCalendar, faCreditCard, faBell, faGear } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Home");

  const handleMenuItemClick = (itemName) => {
    setSelectedMenuItem(itemName);
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 flex justify-between px-4 py-0 bg-red-50 text-sm font-medium rounded-t-3xl h-20	px-6'>
      <MenuItem
        name="Home"
        icon={faHome}
        isSelected={selectedMenuItem === "Home"}
        onClick={() => handleMenuItemClick("Home")}
      />
      <MenuItem
        name="Calendar"
        icon={faCalendar}
        isSelected={selectedMenuItem === "Calendar"}
        onClick={() => handleMenuItemClick("Calendar")}
      />
      <MenuItem
        name="Payment"
        icon={faCreditCard}
        isSelected={selectedMenuItem === "Payment"}
        onClick={() => handleMenuItemClick("Payment")}
      />
      <MenuItem
        name="Alerts"
        icon={faBell}
        isSelected={selectedMenuItem === "Alerts"}
        onClick={() => handleMenuItemClick("Alerts")}
      />
            <MenuItem
        name="Settings"
        icon={faGear}
        isSelected={selectedMenuItem === "Settings"}
        onClick={() => handleMenuItemClick("Settings")}
      />
    </div>
  );
}
