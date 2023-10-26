import React from 'react';
import { Image,Carousel,Row,Col } from 'react-bootstrap';
import HomePageGallery from '../components/homePageGallery.jsx';
import { useGetCabsQuery } from '../slices/cabApiSlice.js';
import Cab from '../components/cab.jsx';


import { useSpring, animated } from 'react-spring'




const HomeScreen2 = () => {
  const { data: cabs, isLoading, error } = useGetCabsQuery({});
  // const style = useSpring({
  //   from: {
  //     transform: "rotateY(0deg)"
  //   },
  //   transform: "rotateY(25deg)"
  // });
  return (
    <>
    <HomePageGallery></HomePageGallery>
    {!isLoading &&
        <>
          <div
            style={{
              display: 'flex',
              overflowX:'scroll',
              width: '100%',
              backgroundColor:""
            }}
          >
          
              {cabs?.map((cab) => (
                <animated.div style={{
                  flexShrink: 0,
                  width: '300px',
                  borderRadius: '10px',
                  marginLeft: '5px',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center'//,...style
                }}>
                  <Cab key={cab.id} cab={cab} style={{ flex: '0 0 300px' }} />
                </animated.div>
              ))}
              
          </div>
        </>
    }
    
    </>
  )
}

export default HomeScreen2