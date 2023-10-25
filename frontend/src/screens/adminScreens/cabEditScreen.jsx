import {Form,Button} from 'react-bootstrap';
import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { useGetCabDetailQuery,useUpdateCabMutation } from '../../slices/cabApiSlice.js';
import Cab from '../../components/cab.jsx';
import Loading from '../../components/loading.jsx';
import FormContainer from '../../components/formContainer.jsx';
import { toast } from 'react-toastify';



const CabEditScreen = ()=>{
    const { id:cabId } = useParams();
   
    const [name,setName] = useState('');
    const [discription,setDiscription] = useState('');

    const {data:cab,isLoading,refetch} = useGetCabDetailQuery(cabId);
    const [updateCab,{isLoading:isUpdating}] = useUpdateCabMutation();
    const navigate = useNavigate();
    const submitHandler = async (e)=>{
      e.preventDefault();
      try{
        console.log('name',name);
        const result = await updateCab(
          {
            _id:cabId,
            name:name,
            discription:discription,
          }).unwrap();
        console.log('update Successfull....');
        if(result?.error){
          toast.error(result.error);
        }
        else{
          toast.success('Cab Updated..');
          refetch();
          navigate('/admin/cabList');

        }
      }
      catch(err){
        toast.error('Please Try again...');
      }
    }
    useEffect(()=>{
      if(cab){
        setName(cab.name);
        setDiscription(cab.discription);  
      }
    }, [cab])
    

    
    return (
      <FormContainer >
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className="my-3">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="discription" className="my-3">
            {/* <Form.Label>Email</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            ></Form.Control>
          </Form.Group>
          
          
          <Button
            type="submit"
            style={{
              backgroundColor: "#68b072",
              width: "100%",
              outline: "none",
              border: "none",
            }}
            variant="primary"
            className="mt-2"
            disabled={isLoading}
          >
            Update Details
          </Button>
          {isUpdating && <Loading />}
        </Form>
        
      </FormContainer>
    )

}

export default CabEditScreen;