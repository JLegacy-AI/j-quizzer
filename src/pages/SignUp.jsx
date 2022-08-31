import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

function SignUp() {

    const [state, setstate] = useState({
        name:"",
        username:"",
        email:"",
        password:""
    });

    useEffect( ()=>{
        axios.get("http://localhost:3001/")
        .then( response => {
            if(response.status !==200)
                console.log(response.status);
            console.log(response.data);
        } )
        .catch( error => {
            console.log(error);
        })

        return () => {}
    }, [])

    const submitForm = async (e) => {
        e.preventDefault()
        console.log("Submit Button Click");
        const data =  JSON.stringify(state)
        const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        const result = await axios.post("http://localhost:3001/user", data, customConfig)
        console.log(result.data);
    }  

    const changeHandler = (e) => {
        const keyValuePair = {}
        keyValuePair[e.target.name]=e.target.value;
        setstate({...state, ...keyValuePair});
    }

    return (
        <div className='w-screen min-h-screen bg-gradient-to-r pl-[200px] pr-[200px] from-cyan-500 to-[#5F24DC] flex justify-center items-center'>
            <form className='flex max-w-[1100px] rounded-md bg-white m-auto' onSubmit={ (e) => submitForm(e)}>      
                <div className='m-[30px] flex flex-col'>
                    <h1 className='mb-[20px] font-serif text-3xl text-[#848485] flex justify-center items-center'>Sign Up</h1>
                    <input className='mb-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="text" name="name" placeholder='Name' required onChange={changeHandler}/>
                    <input className='mb-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="text" name="username" placeholder='Username' required onChange={changeHandler}/>
                    <input className='mb-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="email" name="email" placeholder='Email' required onChange={changeHandler}/>
                    <input className='mb-[20px] border-b-[2px] border-b-[#D6D8DA] hover:border-b-[#5F24DC] outline-none hover:placeholder:text-[#5F24DC] h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all' type="password" name="password" placeholder='Password' required onChange={changeHandler}/>
                    <input className='mb-[20px] hover:cursor-pointer outline-none border-2 text-[#848485] hover:text-white hover:font-semibold h-[35px] w-[100px] rounded-md border-[#848485] hover:border-[#5F24DC] hover:bg-[#5F24DC]  flex items-center justify-center transition-all' type="submit" value="Sign Up" name='submit'/>
                </div>
                <div className='hidden 1075:flex justify-center items-center'>
                    <img src={process.env.PUBLIC_URL+"images/signup-image-test-3.png"} alt="teacher image" />
                </div>
            </form>
        </div>
    )
}

export default SignUp