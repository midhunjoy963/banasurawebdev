import { Row,Col } from 'react-bootstrap';
import { useGetCabsQuery } from '../slices/cabApiSlice.js';
import Cab from './cab.js';
import Loading from './loading.js';
import Message from './message.js';





const Cabs = ()=>{
    

    const {data:cabs,isLoading,error } =  useGetCabsQuery({});
    
    return(
        <>
            { isLoading ? (<Loading />) :error ? (<Message variant='danger' children={error?.data?.message||error.error}></Message>) :(<>
                <Row>
                {
                    cabs.map((cab)=>(
                        <Col key={cab._id} sm={12} md={6} lg={4} xl={3}>
                                <Cab cab={cab}></Cab>
                        </Col>
                            
                    ))}
                </Row>
            </>)}
        </>
        
    )
}

export default Cabs;