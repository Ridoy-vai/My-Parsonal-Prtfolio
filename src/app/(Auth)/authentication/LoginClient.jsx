"use client";

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/router';
// import { authClient } from '@/app/lib/auth-clien';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function LoginClient() {
    const [isActive, setIsActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showSignInPassword, setShowSignInPassword] = useState(false);

    // Sign Up 
    const { register: registerSignUp,
        handleSubmit: handleSubmitSignUp,
        formState: { errors: errorsSignUp }
    } = useForm({ mode: "onChange" });

    // Sign In 
    const { register: registerSignIn,
        handleSubmit: handleSubmitSignIn,
        formState: { errors: errorsSignIn }
    } = useForm({ mode: "onChange" });

    // Functions
    const onSignUpSubmit = async (formData) => {
        // console.log("Sign Up Data:", formData);

        const { data: response, error } = await authClient.signUp.email({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            image: formData.image,
            callbackURL: "/",
        });

        if (error) {
            console.error(error);
            return;
        }

        console.log("Response:", response);
    };



    const onSignInSubmit = async (formData) => {
        const { data: response, error } = await authClient.signIn.email({
            email: formData.email,
            password: formData.password,
            rememberMe: true,
        });

        if (error) {
            console.error("Error code:", error.code);
            console.error("Error message:", error.message);
            alert(error.message || "Login failed. Please try again.");
            return;
        }

        if (response) {
            router.push("/");
            router.refresh();
        }
    };


    
    // Social functions
    const socialAction = (action) => () => console.log(action);

    return (
        <div className="relative overflow-hidden bg-white rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] w-3xl max-w-full min-h-120">

            {/* Sign Up Form */}
            <div className={`absolute top-0 h-full transition-all duration-700 ease-in-out left-0 w-1/2 opacity-0 z-1 
            ${isActive ? "translate-x-full opacity-100 z-5 animate-move" : ""}`}>
                <form
                    onSubmit={handleSubmitSignUp(onSignUpSubmit)}
                    className="bg-white flex items-center justify-center flex-col px-10 h-full text-center"
                >
                    <h1 className="font-bold text-2xl">Create Account</h1>
                    <div className="my-3 flex gap-2">
                        <SocialIcon onClick={socialAction("googleSignUp")} iconClass="fa-google-plus-g" />
                        <SocialIcon onClick={socialAction("facebookSignUp")} iconClass="fa-facebook-f" />
                        <SocialIcon onClick={socialAction("githubSignUp")} iconClass="fa-github" />
                        <SocialIcon onClick={socialAction("linkedinSignUp")} iconClass="fa-linkedin-in" />
                    </div>
                    <span className="text-xs mb-2">or use your email for registration</span>

                    <div className="w-full space-y-1">
                        <div className="w-full text-left">
                            <input
                                type="text"
                                placeholder="Name"
                                {...registerSignUp("name", { required: "Name is required", minLength: { value: 3, message: "Min 3 characters required" } })}
                                className={`bg-[#eee] border-none my-1 py-3 px-4 text-sm rounded-lg w-full outline-none block ${errorsSignUp.name ? 'ring-1 ring-red-400' : ''}`}
                            />
                            {errorsSignUp.name && <p className="text-red-500 text-[10px] ml-1">{errorsSignUp.name.message}</p>}
                        </div>

                        <div className="w-full text-left">
                            <input
                                type="email"
                                placeholder="Email"
                                {...registerSignUp("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                                })}
                                className={`bg-[#eee] border-none my-1 py-3 px-4 text-sm rounded-lg w-full outline-none block ${errorsSignUp.email ? 'ring-1 ring-red-400' : ''}`}
                            />
                            {errorsSignUp.email && <p className="text-red-500 text-[10px] ml-1">{errorsSignUp.email.message}</p>}
                        </div>

                        <div className="w-full text-left relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                {...registerSignUp("password", { required: "Password is required", minLength: { value: 6, message: "Min 6 characters required" } })}
                                className={`bg-[#eee] border-none my-1 py-3 px-4 pr-10 text-sm rounded-lg w-full outline-none block ${errorsSignUp.password ? 'ring-1 ring-red-400' : ''}`}
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-6 -translate-y-1/2 text-gray-500 text-xs">
                                <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                            </button>
                            {errorsSignUp.password && <p className="text-red-500 text-[10px] ml-1">{errorsSignUp.password.message}</p>}
                        </div>
                    </div>

                    <button type="submit" className="bg-[#512da8] text-white text-xs py-3 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase mt-4 cursor-pointer">
                        Sign Up
                    </button>
                </form>
            </div>

            {/* Sign In Form */}
            <div className={`absolute top-0 h-full transition-all duration-700 ease-in-out left-0 w-1/2 z-2
            ${isActive ? "translate-x-full" : ""}`}>
                <form
                    onSubmit={handleSubmitSignIn(onSignInSubmit)}
                    className="bg-white flex items-center justify-center flex-col px-10 h-full text-center"
                >
                    <h1 className="font-bold text-2xl">Sign In</h1>
                    <div className="my-5 flex gap-2">
                        <SocialIcon onClick={socialAction("googleSignIn")} iconClass="fa-google-plus-g" />
                        <SocialIcon onClick={socialAction("facebookSignIn")} iconClass="fa-facebook-f" />
                        <SocialIcon onClick={socialAction("githubSignIn")} iconClass="fa-github" />
                        <SocialIcon onClick={socialAction("linkedinSignIn")} iconClass="fa-linkedin-in" />
                    </div>
                    <span className="text-xs mb-2">or use your email password</span>

                    <div className="w-full text-left">
                        <input
                            type="email"
                            placeholder="Email"
                            {...registerSignIn("email", { required: "Email is required" })}
                            className={`bg-[#eee] border-none my-2 py-3 px-4 text-sm rounded-lg w-full outline-none block ${errorsSignIn.email ? 'ring-1 ring-red-400' : ''}`}
                        />
                        {errorsSignIn.email && <p className="text-red-500 text-[10px] ml-1">{errorsSignIn.email.message}</p>}
                    </div>

                    <div className="w-full text-left relative">
                        <input
                            type={showSignInPassword ? "text" : "password"}
                            placeholder="Password"
                            {...registerSignIn("password", { required: "Password is required" })}
                            className={`bg-[#eee] border-none my-2 py-3 px-4 pr-10 text-sm rounded-lg w-full outline-none block ${errorsSignIn.password ? 'ring-1 ring-red-400' : ''}`}
                        />
                        <button type="button" onClick={() => setShowSignInPassword(!showSignInPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                            <i className={`fa-solid ${showSignInPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                        </button>
                        {errorsSignIn.password && <p className="text-red-500 text-[10px] ml-1">{errorsSignIn.password.message}</p>}
                    </div>

                    <a href="#" className="text-gray-700 text-sm no-underline my-3 hover:text-[#512da8]">Forgot Your Password?</a>

                    <button type="submit" className="bg-[#512da8] text-white text-xs py-3 px-11 border border-transparent rounded-lg font-semibold tracking-wider uppercase cursor-pointer">
                        Sign In
                    </button>
                </form>
            </div>

            {/* Toggle Panels */}
            <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-100
                ${isActive ? "-translate-x-full rounded-r-[150px]" : "rounded-l-[150px]"}`}>
                <div className={`bg-[#512da8] bg-linear-to-r from-[#5c6bc9] to-[#512da8] text-white relative -left-full h-full w-[200%] transition-all duration-700 ease-in-out
                    ${isActive ? "translate-x-1/2" : "translate-x-0"}`}>
                    <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 transition-all duration-700 ease-in-out
                        ${isActive ? "translate-x-0" : "translate-x-[-200%]"}`}>
                        <h1 className="font-bold text-2xl">Welcome Back!</h1>
                        <p className="text-sm leading-5 tracking-tight my-5">Enter your personal details to use all of site features</p>
                        <button onClick={() => setIsActive(false)} className="bg-transparent border border-white text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase mt-3 cursor-pointer">Sign In</button>
                    </div>
                    <div className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-8 text-center top-0 right-0 transition-all duration-700 ease-in-out
                        ${isActive ? "translate-x-[200%]" : "translate-x-0"}`}>
                        <h1 className="font-bold text-2xl">Hello Friend!</h1>
                        <p className="text-sm leading-5 tracking-tight my-5">Register with your personal details to use all of site features</p>
                        <button onClick={() => setIsActive(true)} className="bg-transparent border border-white text-white text-xs py-3 px-11 rounded-lg font-semibold tracking-wider uppercase mt-3 cursor-pointer">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SocialIcon({ iconClass, onClick }) {
    return (
        <button onClick={onClick} className="border border-gray-300 rounded-lg inline-flex justify-center items-center w-10 h-10 text-gray-800 transition-colors hover:bg-gray-100 cursor-pointer">
            <i className={`fa-brands ${iconClass}`}></i>
        </button>
    );
}