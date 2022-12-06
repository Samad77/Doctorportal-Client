import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Pages/Context/AuthProvider";

const useToken = (email) => {
    const {user} = useContext(AuthContext);
    const [token, setToken] = useState("");
    useEffect( () => {

    }, [])
}

export default useToken;