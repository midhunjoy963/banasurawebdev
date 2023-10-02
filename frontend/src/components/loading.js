import {Spinner} from 'react-bootstrap';

const loading = () => {
  return (
    <Spinner animation="border" variant="primary" 
    style={{
        width:"100px",
        height:"100px",
        margin:"auto",
        display:"block"
        }}
    />
  )
}

export default loading;