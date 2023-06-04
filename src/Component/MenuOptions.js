import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { switchToDarkTheme, switchToLightTheme } from '../features/layout/layoutSlice';
import { GENERAL_DATA } from '../data/data'

const MenuOptions = ({ className, setOpen }) => {
	const { boards } = GENERAL_DATA;
	const theme = useSelector(state => state.theme.theme);
	const dispatch = useDispatch();
	const [isToggled, setIsToggled] = useState(theme === "dark");

	const handleToggle = () => {
		if (!isToggled) {
			dispatch(switchToDarkTheme());
		} else {
			dispatch(switchToLightTheme());
		}
		setIsToggled(!isToggled);
	};
	return (
		<div className="inner-lateral-menu-body">
			<div className={`navbar-modal ${className || ""}`}>
				<div className="navbar-modal-header">
					all boards ({boards.length})
				</div>
				<div className="navbar-modal-content">
					{boards.map((each, index) => (
						<div key={each.name} className="navbar-modal-board-option">
							<svg className='navbar-board-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16">
								<path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="currentcolor" />
							</svg>
							{each.name}
						</div>
					))}
					<div className="navbar-modal-board-option create-new-board">
						<svg className='navbar-board-icon new-board-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16">
							<path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" fill="currentcolor" />
						</svg>
						<svg className='navbar-add-board-icon add-new-board-icon' xmlns="http://www.w3.org/2000/svg" width="12" height="12">
							<path d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" fill="currentcolor" />
						</svg>
						Create New Board
					</div>
				</div>

				<div className="navbar-modal-footer">
					<div className="toggle-wrapper">
						<img
							className='theme-toggle-icon'
							src={process.env.PUBLIC_URL + '/assets/icon-light-theme.svg'}
							alt="dark theme icon"
						/>
						<button className={`theme-toggle-button ${isToggled ? 'active' : ''}`} onClick={handleToggle}>
							<div className={`toggle-slider ${isToggled ? 'active' : ''}`}></div>
						</button>
						<img
							className='theme-toggle-icon'
							src={process.env.PUBLIC_URL + '/assets/icon-dark-theme.svg'}
							alt="light theme icon"
						/>
					</div>
				</div>
			</div>
			<div className="lateral-navbar-lower-section" onClick={() => {
				setOpen(false);
			}}>
				<div className="hide-sidebar-icon">
					<img src={process.env.PUBLIC_URL + '/assets/icon-hide-sidebar.svg'} alt="Logo" />
				</div>
				<div className="hide-sidebar-text">
					Hide Sidebar
				</div>
			</div>
		</div>
	)
}

export default MenuOptions