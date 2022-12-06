import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Main from "../Main/Main";

const router = createBrowserRouter([
    {path : "/",
    element : <Main></Main>,
    children : [
        {path : '/', element : <Home></Home>,}, 
        {path: '/home', element : <Home></Home>},
        {path: '/home', element : <Login></Login>},
    ]
    }
])

export default router;