import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))} className="flex">
                <input {...register("firstName")} placeholder="First name" />
                <select {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select>
                <textarea {...register("aboutYou")} placeholder="About you" />
                <p>{data}</p>
                <input type="submit" />
            </form>
        </section>
    );
};

export default Login;