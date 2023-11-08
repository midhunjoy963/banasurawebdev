import {Form,Button,Row,Col} from 'react-bootstrap';
import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { FaEdit,FaTrash } from "react-icons/fa";

import { 
  useGetCabDetailQuery,
  useUpdateCabMutation,
  useUploadCabImageMutation 
} from '../../slices/cabApiSlice.js';
import Cab from '../../components/cab.jsx';
import Loading from '../../components/loading.jsx';
import FormContainer from '../../components/formContainer.jsx';
import { toast } from 'react-toastify';
import { LinkContainer } from 'react-router-bootstrap';



const CabEditScreen = ()=>{
    const { id:cabId } = useParams();
   
    const [name,setName] = useState('');
    const [discription,setDiscription] = useState('');
    const [image,setImage] = useState('');

    const {data:cab,isLoading,refetch} = useGetCabDetailQuery(cabId);
    const [updateCab,{isLoading:isUpdating}] = useUpdateCabMutation();
    const [uploadCabImage,{isLoading:isImageUploading}] = useUploadCabImageMutation();
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
            image:image,

          }).unwrap();
        console.log('update Successfull....');
        if(result?.error){
          toast.error(result.error);
        }
        else{
          toast.success('Cab Updated..');
          refetch();
          navigate(`/admin/cab/${cab._id}/edit`);
        }
      }
      catch(err){
        toast.error('Please Try again...');
      }
    }

    const uploadImageHandler = async (e) =>{
      console.log('uploading image');
      const formData = new FormData();
      formData.append('image',e.target.files[0]);
      try{
        console.log('about to call upload api...... ');
        const result = await uploadCabImage(formData).unwrap();
        console.log('upload compleated....');
        toast.success(result.message);
        console.log('image in result...',result.image);
        setImage(result.image);
      }
      catch(err){
        console.log('upload failed...');
        toast.error(err?.data?.message || err?.error);
      }
    }

    useEffect(()=>{
      if(cab){
        setName(cab.name);
        setDiscription(cab.discription);
        setImage(cab.image);
      }
    }, [cab])
    
    const goToDetailEditPage = () =>{
      navigate(`/admin/cab/${cab._id}/editDetails`);
    }
    
    return (
      <div className="my-5 mx-3">
      {cab&&
        <Row className='align-items-center'>
                <Col className='text-end'>
                  <Button onClick={goToDetailEditPage} ><FaEdit />Edit Details Page</Button>
                </Col>
        </Row>
      } 
      <FormContainer >
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name" className="my-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="discription" className="my-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Description"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="image" className="my-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Image URL"
              value={image}
              onChange={(e) => setImage}
            ></Form.Control>
             <Form.Control
              type="file"
              placeholder="Choose Image"
              onChange={uploadImageHandler}
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

      <Row className='text-center my-3'>
          <Col><h2>Preview</h2></Col>
      </Row>
      {cab?
        (<Row className="my-3 justify-content-md-center">
            <Col className="my-3" sm={12} md={6} lg={4} xl={3}>
                <Cab cab={cab}></Cab>
            </Col>
        </Row>):
        (
          <Loading />
        )
      }

      </div>
    )

}

export default CabEditScreen;