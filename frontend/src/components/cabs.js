import { Row,Col } from 'react-bootstrap';
import { useGetCabsQuery } from '../slices/cabApiSlice.js';
import Cab from './cab.js';
import Loading from './loading.js';
import Message from './message.js';
import {useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';





const Cabs = ()=>{
    const addCabHandler = ()=>{
        console.log('adding new cab');
    }

    const {userInfo} = useSelector((state)=>state.auth);
    const {data:cabs,isLoading,error } =  useGetCabsQuery({});
    return(
        <>
            { isLoading ? (<Loading />) :error ? (<Message variant='danger' children={error?.data?.message||error.error}></Message>) :(<>
                {
                    userInfo?.isAdmin && <><Button className='my-3' variant="primary" onClick={addCabHandler} > Add Cab</Button></>

                }
                <Row className='my-3'>
                {
                    
                    cabs.map((cab,i)=>(
                        <Col key={cab._id} sm={12} md={6} lg={4} xl={3}>
                                <Cab cab={cab}></Cab>
                        </Col>
                    ))
                    
                }
                </Row>
                
            </>)}
        </>
        
    )
}

export default Cabs;