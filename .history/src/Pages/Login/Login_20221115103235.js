import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const [data, setData] = useState("");
    const {register, handleSubmit} = useForm()
    return (
        <form onSubmit={handleSubmit(data)}>
            <input {...register("firstName")} />
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="submit" />
        </form>
    );
};

export default Login;