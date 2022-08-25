import React from 'react'
import {useState, useEffect} from 'react'

function SignUp() {

    
    const clickHandler = (e)=>{
        console.log("Click")
    }


    return (
        <div className='w-screen min-h-screen bg-gradient-to-r from-cyan-500 to-[#5F24DC] flex justify-center items-center'>
            <form className='flex max-w-[1100px] bg-white m-auto' action="" method="post">      
                <div className='m-[30px] flex flex-col'>
                    <h1 className='font-serif text-3xl text-[#848485] flex justify-center items-center'>Sign Up</h1>
                    <input className='mt-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="text" name="name" id="name" placeholder='Name'/>
                    <input className='mt-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="text" name="username" id="username" placeholder='Username'/>
                    <input className='mt-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="email" name="email" id="email" placeholder='Email'/>
                    <input className='mt-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="password" name="password" id="password" placeholder='Password'/>
                    <input className='mt-[20px] hover:cursor-pointer outline-none border-2 text-[#9578d4] hover:text-[#5F24DC] hover:font-semibold h-[35px] w-[100px] rounded-md border-[#9578d4] hover:border-[#5F24DC] flex items-center justify-center transition-all' type="button" value="Sign Up" />
                </div>
                <div className=''>
                    <img className='relative bottom-0 right-0' src={process.env.PUBLIC_URL+"images/signup-image-test-3.png"} alt="teacher image" />
                </div>
            </form>
        </div>
    )
}

export default SignUp