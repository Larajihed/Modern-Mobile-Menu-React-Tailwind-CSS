import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuItem(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.name); // Pass the item name to the parent component's onClick handler
    }
  };

  const iconContainerStyles = {
    transition: 'transform 0.3s ease-in-out',
    transform: props.isSelected ? 'translateY(-32px)' : 'translateY(0)',
    position: 'absolute', // Add absolute positioning
 

  };

  const nameContainerStyles = {
    transition: 'transform 0.3s ease-in-out',
    transform: 'translateY(16px)', // Keep the name container fixed
    position: 'fixed', // Add fixed positioning
    marginTop: '8px', // Add spacing between the icon and name containers

  };

  return (
    <div
      className={`menu-item-container flex flex-col items-center justify-center text-center px-6 pb-3`}
      onClick={handleClick} // Add the click handler to the container div
    >
      <div
        className={`icon-container p-4 rounded-full ${props.isSelected ? 'bg-red-700 border-8 border-white ' : 'py-0'}`}
        style={iconContainerStyles}
      >
        <FontAwesomeIcon
          icon={props.icon}
          size="xl"
          style={{ color: props.isSelected ? 'white' : '#b91c1c' }}
        />
      </div>
      <div
        className={`menu-name-container ${props.isSelected ? '' : 'text-red-700'}`}
        style={nameContainerStyles}
      >
        <p>{props.name}</p>
      </div>
    </div>
  );
}
