import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <input {...register("firstName")} placeholder="First name" />
                
                
                <p>{data}</p>
                <input type="submit" />
            </form>

        </div>
    );
};

export default SignUp;