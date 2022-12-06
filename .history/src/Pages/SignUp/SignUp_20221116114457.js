import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <div>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="bg-white w-96 mx-auto text-black rounded-xl px-7 py-10">
                <p className='font-bold text-2xl py-5'>Sign Up</p>

                <div>

                    <label className="label">
                        <span className="label-text text-white">First Name</span>
                    </label>

                    <input {...register("firstName")} placeholder="First name" type="text" className="input input-bordered input-md w-full bg-white" />
                </div>

                <div>

                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>

                    <input {...register("email")} placeholder="Email" type="email" className="input input-bordered input-md w-full " />
                </div>

                <div>

                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>

                    <input {...register("password")} placeholder="Password" type="password" className="input input-bordered input-md w-full " />
                </div>

                <label className="label">
                        <span className="label-text text-white">Forget password?</span>
                </label>

                <input type="submit" className='btn w-full bg-neutral my-3' />

                <p className=" mx-auto mb-2">
                        <span className="    text-center">If you have an account ? <Link to="/login" className='text-primary'>Please Sign In</Link></span>
                </p>

                <div className="divider">OR</div>

                <button className="btn btn-outline btn-info w-full mb-3">CONTINUE WITH GOOGLE</button>
                <p>{data}</p>
                
            </form>

        </div>
    );
};

export default SignUp;