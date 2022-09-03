import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import TextField from './TextField';

function SignUp() {

    const [state, setstate] = useState({
        name:"",
        username:"",
        email:"",
        password:"",
        againpassword:""
    });

    const textField =[
        {
            type: 'text',
            name: 'name',
            placeholder: 'Name',
        },
        {
            type: 'text',
            name: 'username',
            placeholder: 'Username',
        },
        {
            type: 'email',
            name: 'email',
            placeholder: 'Email',
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            red: false
        },
        {
            type: 'password',
            name: 'againpassword',
            placeholder: 'Repeat Password',
            red: false
        },
    ] 

    const handleChange = (e) => {
        const value = e.target.value
        const keyValue = {}
        keyValue[e.target.name] = value
        setstate({...state, ...keyValue})
        console.log(state);
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(state['password'] !== state['againpassword'] ){
            setstate({...state, password: "", againpassword: ""})
            return
        }
        await axios.post('http://localhost:3001/user',{...state})
        .then( responce => {
            alert('Account Successfully Created')
        })
        .catch( error => {
            alert(error.message)
        })
    } 

    return (
            <form className='flex rounded-md bg-white  m-auto' onSubmit={(e) => handleSubmit(e)}>      
                <div className='m-[30px] flex flex-col'>
                    <h1 className='mb-[20px] font-serif text-3xl text-[#848485] flex justify-center items-center'>Sign Up</h1>
                    {
                        textField.map( (ele, ind) => {
                            return <TextField key={ind} type={ele.type} value={state[ele.name]} name={ele.name} placeholder={ele.placeholder} handleChange={handleChange}/>
                        })
                    }
                    <input className='mb-[20px] hover:cursor-pointer outline-none border-2 text-[#848485] hover:text-white hover:font-semibold h-[35px] w-[100px] rounded-md border-[#848485] hover:border-[#5F24DC] hover:bg-[#5F24DC]  flex items-center justify-center transition-all' type="submit" value="Sign Up" name='submit'/>
                </div>
            </form>
    )
}

export default SignUp

// <div className='w-screen min-h-screen  pl-[200px] pr-[200px] bg-[#353738] flex justify-center items-center'>
//         </div>