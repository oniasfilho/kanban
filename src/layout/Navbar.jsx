import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavbarBoardDropdown from '../component/NavbarBoardDropdown';
import AddButton from '../component/AddButton';
import { setCurrentTask, setModalType, setGenericModal } from '../features/content/contentSlice';

function Navbar() {
  const name = useSelector((state) => state.content.currentBoard?.name);
  const dispatch = useDispatch();
  const handleEditBoardClick = () => {
    console.log('chegou em handleEditBoardClick');
    dispatch(setCurrentTask(null));
    dispatch(setModalType('BOARD-EDIT'));
    dispatch(setGenericModal(true));
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left-section">
        <img src={`${process.env.PUBLIC_URL}/assets/logo-mobile.svg`} alt="Logo" />
        <div className="logo-and-board-name-wrapper">
          <div className="logo header-item-l">
            Kanban
          </div>
          <div className="board-name header-item-l">
            {name}
          </div>
        </div>
        <NavbarBoardDropdown />
      </div>
      <div className="navbar-right-section">
        <AddButton />
        <img
          src={`${process.env.PUBLIC_URL}/assets/icon-vertical-ellipsis.svg`}
          alt="Options"
          onClick={handleEditBoardClick}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default Navbar;
