import React,{useState} from 'react'

export default function Example() {
    const[count,setCount] = useState('');

    const HandleClick = () =>{
        setCount(Number (count+1))
    }
  return (
    <>
      <p>You clicked {count} </p>
      <button className="btn btn-primary" onClick={HandleClick}>Click Here!</button>
    </>
  )
}
