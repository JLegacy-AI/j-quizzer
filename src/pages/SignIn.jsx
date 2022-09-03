import React from 'react'
import TextField from './TextField'
import {useState} from 'react'
import axios from 'axios'

function SignIn() {

    const [state, setState] = useState({
                                        username:"",
                                        password:""
                                        })

    const textField =[
        {
            type: 'text',
            name: 'username',
            placeholder: 'Email/Username',
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Password',
        },
    ] 

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:3001/user/login',state)
        .then((responce) => {
            if(responce.data.login == true){
                alert("Successfully Login")
                return
            }
            alert("Invalid Username/Email or Password")
        })
        .catch(err => {
            alert(err.message);
        })
    }

    const handleChange = (e) => {
        const value = e.target.value
        const keyValue = {}
        keyValue[e.target.name] = value
        setState({...state, ...keyValue})
        console.log(state);
    }

  return (
    <form className='bg-white rounded-md' onSubmit={(e) => handleSubmit(e)}>
        <div className='m-[30px] flex flex-col'>
            <h1 className='mb-[20px] font-serif text-3xl text-[#848485] flex justify-center items-center'>Sign In</h1>
                
            {
                textField.map((ele, ind) => {
                    return <TextField key={ind} placeholder={ele.placeholder} type={ele.type} name={ele.name} handleChange={handleChange} />
                })
            }
            <input className='mb-[20px] hover:cursor-pointer outline-none border-2 text-[#848485] hover:text-white hover:font-semibold h-[35px] w-[100px] rounded-md border-[#848485] hover:border-[#5F24DC] hover:bg-[#5F24DC]  flex items-center justify-center transition-all' type="submit" value="Log In" name='submit'/>
        </div>
    </form>
  )
}

export default SignIn
