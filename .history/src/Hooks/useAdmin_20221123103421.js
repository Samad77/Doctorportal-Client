import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect( () => {
        if(email){
            fetch(`http://localhost:4000/users/admin/${email}}`)
        }
    }, [email])
}