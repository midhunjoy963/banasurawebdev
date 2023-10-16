import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

//css imports here
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import HomeScreen from './screens/homescreen.js';
import CabsScreen from './screens/cabsscreen.js';
import CabDetailScreen from './screens/cabdetailscreen.js';
import reportWebVitals from './reportWebVitals';
import LoginScreen from './screens/loginScreen.js';



//first homescrren
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/api/cabs' element ={<CabsScreen />} />
      <Route path='/api/cabs/:id' element={<CabDetailScreen />} />
      <Route path='/api/user/login' element={<LoginScreen />} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} /> 
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
