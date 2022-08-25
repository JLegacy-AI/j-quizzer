import React from 'react'
import {useState, useEffect} from 'react'

function SignUp() {

    const [state, setstate] = useState({
        name:"",
        username:"",
        email:"",
        password:""
    });

    const clickHandler = (e) => {
        const keyObj= e.target.name;
        const obj = {};
        obj[keyObj] = e.target.value;
        
    }

    const changeHandler = (e) => {
        const keyObj= e.target.name;
        const obj = {};
        obj[keyObj] = e.target.value;
        setstate({...state, ...obj});
    }

    return (
        <div className='w-screen min-h-screen bg-gradient-to-r pl-[200px] pr-[200px] from-cyan-500 to-[#5F24DC] flex justify-center items-center'>
            <form className='flex max-w-[1100px] bg-white m-auto' action="" method="post">      
                <div className='m-[30px] flex flex-col'>
                    <h1 className='font-serif text-3xl text-[#848485] flex justify-center items-center'>Sign Up</h1>
                    <input className='mt-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="text" name="name" id="name" placeholder='Name' onKeyUp={changeHandler} onChange={changeHandler}/>
                    <input className='mt-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="text" name="username" id="username" placeholder='Username'onChange={changeHandler}/>
                    <input className='mt-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="email" name="email" id="email" placeholder='Email' onChange={changeHandler}/>
                    <input className='mt-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="password" name="password" id="password" placeholder='Password' onChange={changeHandler}/>
                    <input className='mt-[20px] hover:cursor-pointer outline-none border-2 text-[#848485] hover:text-white hover:font-semibold h-[35px] w-[100px] rounded-md border-[#848485] hover:border-[#5F24DC] hover:bg-[#5F24DC]  flex items-center justify-center transition-all' type="button" value="Sign Up" onClick={clickHandler}/>
                </div>
                <div className='hidden 1075:flex justify-center items-center'>
                    <img src={process.env.PUBLIC_URL+"images/signup-image-test-3.png"} alt="teacher image" />
                </div>
            </form>
        </div>
    )
}

export default SignUp