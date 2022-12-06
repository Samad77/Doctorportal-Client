import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <section className=''>
            <h1>Login</h1>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="flex flex-col ">
                
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" {...register("Email")} className="input input-bordered w-full max-w-xs"/>                   
                </div>
                {/* <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select> */}
                {/* <textarea {...register("aboutYou")} placeholder="About you" /> */}
                <p>{data}</p>
                <input type="submit" />
            </form>
        </section>
    );
};

export default Login;