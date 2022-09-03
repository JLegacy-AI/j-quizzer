import React from 'react'

function TextField(props) {


    const style = {
        default: 'mb-[20px] p-[5px] outline-none h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all hover:border-b-[#5F24DC] hover:placeholder:text-[#5F24DC] border-b-[2px] border-b-[#D6D8DA]',
        require: 'mb-[20px] p-[5px] outline-none h-[40px] w-[300px] focus:cursor-text cursor-pointer transition-all hover:border-b-[#5F24DC] hover:placeholder:text-[#5F24DC] placeholder:text-[#FF0000] border-b-[2px] border-b-[#FF0000]',
    }

    const handleClick = (e) => {
        if(e.target.value === "" || e.target.value === undefined){
            e.target.className = style.require
            return
        }
        e.target.className = style.default
    }

  return (
    <div>
        <input className={style.default} value={props.value} type={props.type} name={props.name} placeholder={props.placeholder} onKeyUp={(e)=> handleClick(e)} onChange={(e) => props.handleChange(e)} required/> 
    </div>
  )
}



export default TextField
