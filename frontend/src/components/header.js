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
        console.log('logging out');
        try{
            await logoutApiCall().unwrap;
            dispatch(logout()); 
            navigate('/');  
        }
        catch(err){
            console.log('logout failed'+err);
        }
    };

    const isNavbarExpanded = window.innerWidth <= 992;

  return (
    <header>
        <Navbar fixed="top" style={{height:'11%', backgroundColor: 'rgba(0,0,0,0.6)'}}  expand="lg">
            <Container height=''>
                <LinkContainer to='/'>
                    <Navbar.Brand className='navbar-text'>Team Banasura</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle area-controls="basic-navbar-nav" className='bg-success' style={{backgroundColor: 'rgba(0,0,0,0.9)'}}></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="ps-3" >
                    <Nav className={isNavbarExpanded ? 'nav-item-bg ms-auto' : 'ms-auto'}>
                        <LinkContainer className='pe-5' to='/'>
                            <Nav.Link className='navbar-text'>HOME</Nav.Link>
                        </LinkContainer>
                        <LinkContainer className='pe-5' to='/cabs'>
                            <Nav.Link className='navbar-text'>CABS</Nav.Link>
                        </LinkContainer>
                        
                        
                        
                        {
                            userInfo? ( 
                                <NavDropdown className='navbar-text pe-5' title={userInfo.name} id='username'>
                                    <NavDropdown.Item onClick={logoutHandler} >
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown> 
                                )
                            :   
                                (
                                <LinkContainer className='navbar-text pe-5' to='/user/login'>
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