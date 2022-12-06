import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="bg-gray-600 w-96 mx-auto text-white rounded-xl  ">
                <p className='font-bold text-2xl my-4 mt-5'>Sign Up</p>
                <input {...register("firstName")} placeholder="First name" />
                
                
                <p>{data}</p>
                <input type="submit" />
            </form>

        </div>
    );
};

export default SignUp;