import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

function Register() {
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
          SING UP
        </h1>
          <div className='text-gray-400 flex gap-5 py-4 px-4 w-full '>
            <div className='flex flex-col w-full'>
              <input
                type='text'
                {...register('firstName', { required: true })}
                className='py-2 px-2 rounded-sm text-gray-600 text-sm md:text-lg w-full'
                placeholder='First Name'
              />
              {errors.firstName && (
                <span className='text-red-400 text-sm'>
                  please provide your first name
                </span>
              )}
            </div>
            <div className='flex flex-col w-full'>
              {' '}
              <input
                type='text'
                {...register('lastName', {
                  required: true,
                  message: '',
                })}
                className='py-2 px-2 rounded-sm text-gray-600 text-sm md:text-lg w-full'
                placeholder='Last Name'
              />
              {errors.lastName && (
                <span className='text-red-400 text-sm'>
                  please provide your last name
                </span>
              )}
            </div>
          </div>
          <div className='w-full py-3 px-4 flex flex-col justify-center items-center'>
            <input
              type='email'
              placeholder='Email Address'
              {...register('Email', {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className='input-field'
            />
            {errors.Email && (
              <span className='warning-area'> please include your email</span>
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
              className='input-field'
              name='password_repeat'
              type='password'
              placeholder='Enter your confirm password'
              {...register('password_repeat', {
                required: 'provide same password',
                validate: value =>
                  value === password.current || 'The passwords do not match',
              })}
            />
            {errors.password_repeat && (
              <p className='warning-area'>{errors.password_repeat.message}</p>
            )}
          </div>
          <div className='w-full py-3 px-4 flex flex-col justify-center items-center'>
          <input
            type='submit'
            className='py-4 px-4 bg-purple-600 text-white hover:text-gray-500 transition cursor-pointer font-mono border border-purple-600 rounded-md w-full self-center font-semibold hover:bg-transparent'
          />
          </div>
          
        </form>
    </div>
  )
}

export default Register
