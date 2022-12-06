import { createBrowserRouter } from "react-router-dom";
import AllUser from "../../Pages/AllUser/AllUser";
import Appoinment from "../../Pages/Appointment/Appoinment/Appoinment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";

import Login from "../../Pages/Login/Login";
import PrivateRouts from "../../Pages/Private/PrivateRouts/PrivateRouts";
import SignUp from "../../Pages/SignUp/SignUp";
import DashboardLayouts from "../DashboardLayout/DashboardLayouts";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {path : "/",
    element : <Main></Main>,
    children : [
        {path : '/', element : <Home></Home>,}, 
        {path: '/home', element : <Home></Home>},
        {path: '/login', element : <Login></Login>},
        {path : '/appointment', element: <Appoinment></Appoinment>},
        {path : '/signup', element: <SignUp></SignUp>},    
        

    ]
    },
    {path : '/dashboard', element: <PrivateRouts><DashboardLayouts></DashboardLayouts></PrivateRouts>, children : [
        {path: "/dashboard", element: <Dashboard></Dashboard>},
        {path: "/dashboard/allUser", element: <AllUser></AllUser>},
    ]},
])

export default router;