import React from 'react';
import {Row,Col} from 'react-bootstrap';
import Spot from './spot.js';
const spotss =[
    {
        image:'images/touristspots/dam.png',
        title:'Banasura Sagar Dam',
        text:'Banasura Sagar Dam is a picturesque tourist hotspot in Wayanad. Its sprawling reservoir of clear water is surrounded by lush green hills and it’s dotted with tiny islands.'
    },
    {
        image:'images/touristspots/chembra.png',
        title:'Chembra Peak',
        text:'Surrounded by hills, tea plantations and lush green valley, Chembra Peak is the highest mountain peak in Wayanad.'
    },
    {
        image:'images/touristspots/9000kandi.png',
        title:'9000 Kandi',
        text:'In the deep reaches of Wayanad in Kerala, there is a lush green paradise where adventure meets serenity'
    },
    {
        image:'images/touristspots/edakel.png',
        title:'Edakkal caves',
        text:'The Edakkal caves are two natural caves at a remote location at Edakkal, 25 km (15.5 mi) from Kalpetta in the Wayanad district of Kerala in India.'
    },
    {
        image:'images/touristspots/karladlake.png',
        title:'Karlad Lake',
        text:'Karlad Lake is located in Thariode, Wayanad. It is the third largest fresh water lake in Kerala and second largest lake in Wayanad after Pookode Lake.'
    },
    {
        image:'images/touristspots/kurubalakotta.png',
        title:'Kurumbalakkotta Mala',
        text:'Kurumbalakotta is a hill 20Km west of Kalpetta in Wayanad district, Kerala. It is a monolith hillock in Kerala. It rises to 991 m above sea level.'
    },
    {
        image:'images/touristspots/meenmutti.png',
        title:'Meenmutty Falls',
        text:'Meenmutty Falls is located 29 km from Kalpetta in Wayanad District in the state of Kerala, India. It is a three-tiered waterfall with a height of 300 metres.'
    },
    {
        image:'images/touristspots/pookode.png',
        title:'Pookode Lake',
        text:'Pookode Lake in Wayanad is a freshwater lake near Kalpetta resembling the map of India. Nestled between evergreen forests, surrounded by the Western Ghats.'
    },
    {
        image:'images/touristspots/thirunellli.png',
        title:'Thirunelly',
        text:'Thirunelly is a village in Wayanad district in the state of Kerala, India. Thirunelli Temple is a very famous temple located in this village.'
    },

];
const spots = () => {
  return (
    <>
    <Row>
        {
        spotss.map((spot)=>(
            <Col key={spot._id} sm={12} md={12} lg={12} xl={12}>
                <Spot spot={spot}></Spot>
            </Col>
        ))
        }
    </Row>
    </>
  )
}
export default spots;