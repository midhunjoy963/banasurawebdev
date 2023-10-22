import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
//import { FaUser,FaSignOutAlt } from 'react-icons/fa';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import { Navigate, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

const LoggedInUserInfo = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    console.log('Logging out');
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log('Logout failed' + err);
    }
  };

  if (userInfo) {
    // If userInfo is available, display the user's name and profile picture.
    return(
      <>  
      <NavDropdown
          id="nav-dropdown-dark-example"
          title={userInfo.name}
          menuVariant="dark"
        >
        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
        
      </NavDropdown>

      {userInfo.isAdmin && <NavDropdown
            id="nav-dropdown-dark-example"
            title={'Admin'}
            menuVariant="dark"
          >
            <LinkContainer to ='/admin/cabList'>
              <NavDropdown.Item>CabList : admin</NavDropdown.Item>
            </LinkContainer>     
        </NavDropdown>
      }


      </>
      

    );
  } else {
    // If userInfo is not available, display a login link.
    return (
      <LinkContainer to="/login">
        <Nav.Link  >
          Log In
        </ Nav.Link>
      </LinkContainer>
    );
  }
  
};

export default LoggedInUserInfo;
