import { useContext } from "react";
import { AuthContext } from "../Pages/Context/AuthProvider";

const useToken = (email) => {
    const {user} = useContext(AuthContext);
    fetch(`http://localhost:5000/jwt?email=${user?.email}`).then(Response => Response.json()).then(data => {
        if (data.Token) {
            return localStorage.setItem('My-Token', data.Token)
        }
    })
}

export default useToken;