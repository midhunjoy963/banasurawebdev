import {Navigate, useNavigate, Link} from 'react-router-dom';
import {Nav,Navbar,Container, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {FaUser} from 'react-icons/fa';
import {useSelector,useDispatch} from 'react-redux';
import { useLogoutMutation } from '../slices/userApiSlice';
import {logout} from '../slices/authSlice';

const Header = () => {
    const {userInfo} = useSelector((state)=>state.auth);

    const dispatch = useDispatch();
    const navigate =useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async()=>{
        console.log('logginf out');
        try{
            await logoutApiCall().unwrap;
            dispatch(logout()); 
            navigate('/');  
        }
        catch(err){
            console.log('logout failed'+err);
        }
    };
  return (
    <header>
        <Navbar bg="grey" data-bs-theme="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand className='navbar-text'>Team Banasura</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle area-controls="basic-navbar-nav" className='bg-success'></Navbar.Toggle>
                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className="ms-auto ">
                        <LinkContainer to='/'>
                            <Nav.Link className='navbar-text'>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/cabs'>
                            <Nav.Link className='navbar-text'>Cabs</Nav.Link>
                        </LinkContainer>
                        {
                            userInfo? ( 
                                <NavDropdown className='navbar-text' title={userInfo.name} id='username'>
                                    <NavDropdown.Item onClick={logoutHandler} >
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown> 
                                )
                            :   
                                (
                                <LinkContainer className='navbar-text' to='/user/login'>
                                <Nav.Link ><FaUser/> Log In</Nav.Link>
                                </LinkContainer>
                                )
                        }
                        
                        
                    </Nav>

                </Navbar.Collapse>

            </Container>
        </Navbar>
    </header>
  )
}

export default Header