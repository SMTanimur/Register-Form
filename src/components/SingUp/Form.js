import Register from './Register'
import React,{useState} from 'react'
import LogIn from './LogIn'


    
function Form() {
  const [singUp, setSingUP] =useState(false);
  const [login, setLogin] =useState(false);
  

  return (
    <div className='bg-red-200 relative h-screen flex justify-center items-center'>
      <div className='container mx-auto bg-gray-800 py-3 px-3 w-2/3 md:w-1/3'>
        <div className='flex justify-center items-center w-full py-4 px-6 gap-1'>
         
        <button
            type='button'
            className=' px-5 py-3 text-lg text-gray-300 bg-gray-500 w-full'
            onClick={() => setSingUP(!singUp)}
          >
            Sing Up
          </button>
         
          <button
            type='button'
            className='px-5 py-3 text-lg text-gray-300 bg-gray-500 w-full'
            onClick={()=>setLogin(!login)}
          >
            Log In
          </button>
        </div>
        
        {singUp? <Register/>:null}
        {login? <LogIn/>:null}
       
      </div>
    </div>
  );
}

export default Form;
