import {Form,Button} from 'react-bootstrap';
import { useParams,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { 
  useGetCabDetailQuery,
  useUpdateCabMutation,
  useUploadCabImageMutation 
} from '../../slices/cabApiSlice.js';
import Cab from '../../components/cab.jsx';
import Loading from '../../components/loading.jsx';
import FormContainer from '../../components/formContainer.jsx';
import { toast } from 'react-toastify';



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
          navigate('/admin/cabList');

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
    

    
    return (
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
    )

}

export default CabEditScreen;