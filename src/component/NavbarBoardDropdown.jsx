import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavbarDropdownModal from './NavbarDropdownModal';

function NavbarBoardDropdown() {
  const [expanded, setExpanded] = useState(false);
  const name = useSelector((state) => state.content.currentBoard?.name);

  const boards = useSelector((state) => state.content.boards);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="nav-dropdown-wrapper" onClick={toggleExpanded}>
        {name}
        <img
          className="nav-dropdown-down-arrow"
          src={`${process.env.PUBLIC_URL}/assets/icon-chevron-${expanded ? 'up' : 'down'}.svg`}
          alt="Dropdown Arrow"
        />
      </div>

      {expanded && (
      <NavbarDropdownModal toggleExpanded={toggleExpanded} boards={boards} />
      )}
    </>
  );
}

export default NavbarBoardDropdown;
