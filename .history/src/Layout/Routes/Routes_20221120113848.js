import { createBrowserRouter } from "react-router-dom";
import Appoinment from "../../Pages/Appointment/Appoinment/Appoinment";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import JwtExplore from "../../Pages/JWT/JwtExplore";
import Login from "../../Pages/Login/Login";
import PrivateRouts from "../../Pages/Private/PrivateRouts/PrivateRouts";
import SignUp from "../../Pages/SignUp/SignUp";
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
        {path : '/jwt', element: <JwtExplore></JwtExplore>},
        {path : '/dashboard', element: <PrivateRouts><Dashboard></Dashboard></PrivateRouts>},

    ]
    }
])

export default router;