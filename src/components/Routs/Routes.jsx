import { createBrowserRouter } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Homepage from "./Home/Home";
import AboutUs from "./Home/AboutUs/AboutUs";
import Profile from "../Profile/Profile";
import SignIn from "../SignIn/SignIn";
import Signup from "../SignIn/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            element:<Homepage></Homepage>
        },
        {
          path:'/aboutUs',
          element:<AboutUs></AboutUs>
        },
        {
          path:"/profile",
          element:<Profile></Profile>
        },
        {
          path:'/signIn',
          element:<SignIn></SignIn>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        }
    ]
  },
]);