import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="bg-gray-600 w-96 mx-auto text-white rounded-xl  ">
                <p className='font-bold text-2xl py-5'>Sign Up</p>

                <div>

                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>

                    <input {...register("firstName")} placeholder="First name" type="text" className="input input-bordered input-md w-full max-w-xs" />
                </div>

                <p>{data}</p>
                <input type="submit" />
            </form>

        </div>
    );
};

export default SignUp;