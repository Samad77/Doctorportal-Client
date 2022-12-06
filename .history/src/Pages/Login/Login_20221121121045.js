import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState("");

    const { loginUser, user } = useContext(AuthContext);
    console.log(user)
    const [error, setError] = useState(""); 

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'
    
    const handleLogin = data => {
        loginUser(data.email, data.password).then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        }).catch(err => {
            setError(err.message);
            console.log(err);
        })
    }

    return (
        <section className='h-screen  justify-center items-center'>

            {
                error &&
                <div className="alert alert-error shadow-lg w-96 mx-auto my-5">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error}</span>
                    </div>
                </div>
            }

            <form onSubmit={handleSubmit(handleLogin)} className=" rounded-xl shadow-xl bg-white shadow-xl text-black w-96 px-7 mx-auto">
                <h1 className='text-black font-bold text-3xl my-3'>Login</h1>
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-black">Email</span>
                    </label>
                    <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs  focus: bg-white text-black " />

                    {errors.email && <p role="alert" className='text-red-600 text-left'>{errors.email?.message}</p>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-black">Password</span>
                    </label>
                    <input type="text" {...register("password", { required: "Password field is required", minLength: { value: 6, message: "password must be 6 charecter or longer" } })} className="input input-bordered w-full max-w-xs border-2 focus: bg-white text-black " />

                    {errors.password && <p role="alert" className='text-red-600 text-left'>{errors.password?.message}</p>}

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