import React from 'react';
import { Image,Carousel,Row,Col, Container } from 'react-bootstrap';
import HomePageGallery from '../components/homePageGallery.jsx';
import { useGetCabsQuery } from '../slices/cabApiSlice.js';
import Cab from '../components/cab.jsx';


import {  animated } from 'react-spring'




const HomeScreen2 = () => {
  const { data: cabs, isLoading, error } = useGetCabsQuery({});
  
  return (
    <>
    <Container  style={
      { 
      backgroundImage: 'url("../images/touristspots/dam.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      margin: '0px',
      minWidth: '100%',
      padding: '0px',
      color: 'white'
      }}>
      <div className='text-center' style={{padding:'20%'}}>
        <h1 style={{ fontSize: '3rem' }}>Team Banasura</h1>
        <p style={{ fontSize: '1.5rem' }}>We, Team Banasura, are a team of young individuals passionate about promoting and preserving the natural beauty of Wayanad and creating unforgettable experiences for visitors.</p>
      </div>
    </Container>

    {!isLoading &&
        <>
          <div
            style={{
              display: 'flex',
              overflowX:'scroll',
              width: '100%',
              backgroundColor:"",
              marginTop:'5px'
            }}
          >
          
              {cabs?.map((cab) => (
                <div style={{
                  flexShrink: 0,
                  width: '300px',
                  borderRadius: '10px',
                  marginLeft: '5px',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center'
                }}>
                  <Cab key={cab.id} cab={cab} style={{ flex: '0 0 300px' }} />
                </div>
              ))}
              
          </div>
        </>
    }
    
    </>
  )
}

export default HomeScreen2