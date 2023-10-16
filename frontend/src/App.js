import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.jsx';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet ></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}


export default App