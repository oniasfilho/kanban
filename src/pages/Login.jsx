import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const authenticated = useSelector((state) => state.content.authenticated);
  const navigate = useNavigate();
  useEffect(() => {
    if (authenticated) {
      navigate("/home/boards");
    }
  }, []);
  return (
    <div className='login-signup-component'>
      <div className="login-signup-box-wrapper">
        <div className="login-signup-box-header">
          <h1 className="login-signup-title">
            Log in
          </h1>
          <h3 className="login-signup-subtitle">
            Please enter your details
          </h3>
        </div>
        <div className="login-signup-inputs-wrapper">
          <div className="email-password-wrapper">
            <input type="text" className="user-email user-input" value={""} placeholder="Email" />
            <i className="fa fa-envelope email-icon"></i>

            <input type="text" className="user-password user-input" value={""} placeholder='Password' />
            <i className="fa fa-lock password-icon"></i>
          </div>
          <div className="submit-info-wrapper">
            <div className="input-lower-section">
              <div className="remember-me-wrapper">
                <input type='checkbox' className='remember-me' /> Remember me
              </div>
              <div className="reset-password-wrapper">
                Reset password
              </div>
            </div>
            <button className="login-signup-button">Login</button>
          </div>
          <div className="wrapper-division-section">
            <div className="line-or-line">
              <div className="line"></div>
              <span>or</span>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="login-signup-lower-footer">
          <div className="social-area">
            <div className="social-item">
              Sign in with Google
            </div>
          </div>
          <div className="switch-type-wrapper">
            Don't have an account? Sign up!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login