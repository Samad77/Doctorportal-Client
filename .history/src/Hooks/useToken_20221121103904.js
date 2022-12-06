import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Pages/Context/AuthProvider";

const useToken = (email) => {
    const {user} = useContext(AuthContext);
    const [token, setToken] = useState("");
    useEffect( () => {
        fetch(`http://localhost:5000/jwt?email=${user?.email}`).then(Response => Response.json()).then(data => {
        if (data.Token) {
              localStorage.setItem('My-Token', data.Token);
            setToken(data.Token)
        }
    })
    }, [user?.email])

    return [token]
}

export default useToken;