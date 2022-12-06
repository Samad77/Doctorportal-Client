import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <section className='h-screen flex justify-center items-center  '>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className=" rounded-xl shadow-xl bg-gray-800 text-white w-96 px-14">
                <h1 className=''>Login</h1>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="text" {...register("Email")} className="input input-bordered- w-full max-w-xs input-info " />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>
                    <input type="text" {...register("password")} className="input input-bordered- w-full max-w-xs input-info " />
                </div>

                <label className="label">
                    <span className="label-text text-white">Forget Password?</span>
                </label>

                <input type="submit" className='btn w-full' />

                <p>New to doctors portal? Create new account</p>
                <p>{data}</p>
                
            </form>
        </section>
    );
};

export default Login;