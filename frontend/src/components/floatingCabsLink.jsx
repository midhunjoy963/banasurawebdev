import React from 'react';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';
import '../assets/styles/floating.css';

const FloatingCabIcon = ({ to }) => {
  return (
    <LinkContainer to='/api/cabs'>
      <Nav.Link className="floating-cab-icon">
        <BsFillCarFrontFill />
        <div className="icon-label">Ride</div>
      </Nav.Link>
    </LinkContainer>
  );
};

export default FloatingCabIcon;
