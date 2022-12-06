import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
const Login = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const [data, setData] = useState("");

    const handleLogin = data => {
        console.log(data);
    }

    return (
        <section className='h-screen flex justify-center items-center'>

            <form onSubmit={handleSubmit(handleLogin)} className=" rounded-xl shadow-xl bg-white shadow-xl text-black w-96 px-7 ">
                <h1 className='text-black font-bold text-3xl my-3'>Login</h1>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-black">Email</span>
                    </label>
                    <input type="text" {...register("Email", {required: "Email Address is required"})} className="input input-bordered w-full max-w-xs  focus: bg-white text-black " />

                    {errors.mail && <p role="alert">{errors.mail?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Password</span>
                    </label>
                    <input type="text" {...register("password") } className="input input-bordered w-full max-w-xs border-2 focus: bg-white text-black " />

                    
                </div>

                <label className="label">
                    <span className="label-text text-black">Forget Password?</span>
                </label>

                <input type="submit" className='btn w-full bg-neutral' />

                <p className='my-3'>New to doctors portal ? <Link to='/signup' className='text-primary'>Create new account</Link></p>

                    <div className="divider">OR</div>

                <button className="btn btn-outline btn-info w-full mb-3">CONTINUE WITH GOOGLE</button>
                <p>{data}</p>
                
            </form>
        </section>
    );
};

export default Login;