import React from 'react';
import {Button,Table,Row,Col} from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";

import {useSelector,useDispatch} from 'react-redux';

import Loading from '../../components/loading';
import Message from '../../components/message';
import { useGetCabsQuery,useCreateCabMutation } from '../../slices/cabApiSlice';
import {LinkContainer} from 'react-router-bootstrap';
import { toast } from 'react-toastify';

const AllCabs = () => {
    //const {userInfo} = useSelector((state)=>state.auth);
    const {data:cabs,isLoading,error,refetch } =  useGetCabsQuery({});
    const [createCab,{isLoading:loadingCreate}] = useCreateCabMutation();
    const  createCabHandler = async () =>{
        if(window.confirm('Confirm To Create a New Cab.')){
            try{
                await createCab();
                console.log('creating cab successfull');
                refetch();
                
            }catch(err){
                toast.error(err?.data?.message||err.error)
            }
        }
    }
    
    return (
        <>
            <Row className='align-items-center'>
                <Col>
                    <h1>Cabs</h1>
                </Col>
                <Col className='text-end'>
                    <Button onClick={createCabHandler}><FaEdit />Add New Cab</Button>
                </Col>
            </Row>

             { isLoading ? (<Loading />) :error ? (<Message variant='danger' children={error?.data?.message||error.error}></Message>) :(
                <>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cabs.map((cab,i) => (
                            <tr key={cab._id}>
                                <td>{i+1}</td>
                                <td>{cab.name}</td>
                                <td>{cab.discription}</td>
                                <td><LinkContainer to={`/admin/cab/${cab._id}/edit`}>
                                        <FaEdit></FaEdit>
                                    </LinkContainer></td>
                                    
                            </tr>
                        ))
                        }
                        
                    
                    </tbody>
                </Table>
                </>
            )}     
        </>   
    );
}



export default AllCabs