import React from 'react';
import { useSelector } from 'react-redux';
import { setNavbarModalExpanded } from '../features/content/contentSlice';
import { useDispatch } from 'react-redux';
import NavbarDropdownModal from './NavbarDropdownModal';

function NavbarBoardDropdown() {
  // const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const name = useSelector((state) => state.content.currentBoard?.name);
  const boards = useSelector((state) => state.content.boards);
  const isNavbarModalExpanded = useSelector((state) => state.content.isNavbarModalExpanded);
  const toggleExpanded = () => {
    dispatch(setNavbarModalExpanded(!isNavbarModalExpanded));
  };

  return (
    <>
      <div className="nav-dropdown-wrapper" onClick={toggleExpanded}>
        {name}
        <img
          className="nav-dropdown-down-arrow"
          src={`${process.env.PUBLIC_URL}/assets/icon-chevron-${isNavbarModalExpanded ? 'up' : 'down'}.svg`}
          alt="Dropdown Arrow"
        />
      </div>

      {isNavbarModalExpanded && (
        <NavbarDropdownModal toggleExpanded={toggleExpanded} boards={boards} />
      )}
    </>
  );
}

export default NavbarBoardDropdown;
