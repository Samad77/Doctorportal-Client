import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider';
const SignUp = () => {

    const { user, createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = data => {
        const name = data.firstName;
        const email = data.email;
        const password = data.password;

        createUser(email, password).then(result => {
            const user = result.user;
            const profile = {
                displayName : name
            }
            updateUser(profile).then().catch( err => console.error(err));
            const userData = {
                name : name,
                email : email
            };

            fetch('http://localhost:5000/users',{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(userData)
            }).then( Response => Response.json()).then( data => {
                console.log(data);
            });

            fetch(`http://localhost:5000/jwt?email=${email}`).then(Response => Response.json()).then(data => {
                if(data.Token){
                    return localStorage.setItem('My-Token', data.Token)
                }
            })
            navigate('/');
            // console.log(user);
        }).catch(err => {
            console.error(err)
            setError(err)
            return;
        })
    }



    return (
        <div>

            {
                error &&
                <div className="alert alert-error shadow-lg w-96 mx-auto my-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error.message}</span>
                    </div>
                </div>
            }

            <form onSubmit={handleSubmit(handleSubmit(handleRegister))} className="bg-white w-96 mx-auto text-black rounded-xl px-7 py-10">
                <p className='font-bold text-2xl py-5'>Sign Up</p>

                <div>

                    <label className="label">
                        <span className="label-text text-white">First Name</span>
                    </label>

                    <input {...register("firstName", { required: "Name is required for sign up" })} placeholder="First name" type="text" className="input input-bordered input-md w-full bg-white" />

                    {errors?.firstName && <p className='text-left mt-2 text-red-600'>{errors?.firstName?.message}</p>}
                </div>

                <div>

                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>

                    <input {...register("email",

                        {
                            required: "Email is required for sign up",
                            pattern: { value: /^\S+@\S+\.\S+$/, message: "Email didn't complete" }
                        }

                    )} placeholder="Email" type="email" className="input input-bordered input-md w-full " />

                    {errors?.email && <p className='text-left mt-2 text-red-600'>{errors?.email?.message}</p>}
                </div>

                <div>

                    <label className="label">
                        <span className="label-text text-white">Password</span>
                    </label>

                    <input {...register("password",

                        {
                            required: "Password is required for sign up",
                            minLength: { value: 6, message: "Password must be 6 charecter or longer" }
                        }

                    )} placeholder="Password" type="password" className="input input-bordered input-md w-full bg-white" />

                    {errors.password && <p className='text-left mt-2 text-red-600'>{errors?.password?.message}</p>}
                </div>

                <label className="label">
                    <span className="label-text text-white">Forget password?</span>
                </label>

                <input type="submit" className='btn w-full bg-neutral my-3' value="Sign Up" />

                <p className=" mx-auto mb-2">
                    <span className="    text-center">If you have an account ? <Link to="/login" className='text-primary'>Please Sign In</Link></span>
                </p>

                <div className="divider">OR</div>

                <button className="btn btn-outline btn-info w-full mb-3">CONTINUE WITH GOOGLE</button>
                {/* <p>{data}</p> */}

            </form>

        </div>
    );
};

export default SignUp;