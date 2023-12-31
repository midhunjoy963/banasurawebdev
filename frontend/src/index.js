import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
//css imports here
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
//import HomeScreen from "./screens/homeScreen.jsx";
import HomeScreen from "./screens/homeScreen2.jsx";
import CabsScreen from "./screens/cabsScreen.jsx";
import CabDetailScreen from "./screens/cabdetailscreen.jsx";
import SignUpScreen from "./screens/signUpScreen.jsx";
import reportWebVitals from "./reportWebVitals";
import LoginScreen from "./screens/loginScreen.jsx";
import AdiminRoute from "./components/adminRoute.jsx";
import AllCabs from "./screens/adminScreens/allCabsScreen_admin.jsx";
import CabEditScreen from "./screens/adminScreens/cabEditScreen.jsx";
import CabEditDetailsScreen from './screens/adminScreens/cabEditDetailsScreen.jsx';

//first homescrren
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/cabs" element={<CabsScreen />} />
      <Route path="/cabs/:id" element={<CabDetailScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />

      <Route path="/admin" element={<AdiminRoute />}>
        <Route path="/admin/cabList" element={<AllCabs />} />
        <Route path="/admin/cab/:id/edit" element={<CabEditScreen />} />
        <Route path="/admin/cab/:id/editDetails" element={<CabEditDetailsScreen />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
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
