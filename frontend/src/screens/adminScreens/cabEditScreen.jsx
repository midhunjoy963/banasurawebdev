import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { useGetCabDetailQuery,useUpdateCabMutation } from '../../slices/cabApiSlice.js';
import Cab from '../../components/cab.jsx';



const CabEditScreen = ()=>{
    const { id:cabId } = useParams();
   
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');

    const {data:cab,isLoading,refetch,error} = useGetCabDetailQuery(cabId);
    const [updateCab,{isLoading:isUpdating}] = useUpdateCabMutation();
    console.log(cab);

    useEffect(()=>{
      if(cab){
        setName(cab.name);
        setDescription(cab.description);  
      }
    }, [cab])
    

    
    return (
      <Card>
        {/* <Cab cab={cab} /> */}
      </Card>
    )

}

export default CabEditScreen;