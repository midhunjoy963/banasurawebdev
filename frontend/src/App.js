import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div style={{overflowY:"hidden"}} >
      <Header></Header>
      <div style={{paddingTop:'40px'}}>
      <Outlet ></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={10}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
    
  );
};

export default App;
