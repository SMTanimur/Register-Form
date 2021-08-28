import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

function LogIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = data => console.log(data);

  return (
    <div>
       <form
          action=''
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-4 justify-center items-center py-5 px-4 bg-gray-300 mt-5'
        >
        <h1 className='text-center text-2xl py-2 px-3 rounded text-green-400 bg-gray-700 font-mono font-semibold'>
          Log In
        </h1>
          <div className='text-gray-400 flex flex-col gap-5 py-4 px-4 w-full '>
            <div className='w-full py-3 px-4 flex flex-col justify-center items-center'>
              <input
                type='text'
                {...register('username', { required: true })}
                className='py-2 px-2 rounded-sm text-gray-600 text-sm md:text-lg w-full'
                placeholder='username'
              />
              {errors.username && (
                <span className='text-red-400 text-sm self-start'>
                  please provide your username
                </span>
              )}
            </div>
           
          <div className='w-full py-3 px-4 flex flex-col justify-center items-center'>
            <input
              className='input-field'
              id='password'
              {...register('password', {
                required: 'please provide your password',
                minLength: {
                  value: 8,
                  message: 'min 8 characters required',
                },
              })}
              type='password'
              placeholder='Enter your password'
            />
            {errors.password && (
              <span role='alert' className='warning-area'>
                {errors.password.message}
              </span>
            )}
          </div>
        
          <div className='w-full py-3 px-4 flex flex-col justify-center items-center'>
          <input
            type='submit'
            className='py-4 px-4 bg-purple-600 text-white hover:text-gray-500 transition cursor-pointer font-mono border border-purple-600 rounded-md w-full self-center font-semibold hover:bg-transparent'
          />
          </div>
          </div>
        </form>
    </div>
  )
}

export default LogIn
