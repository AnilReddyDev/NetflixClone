import React from 'react'
import { Link } from 'react-router-dom'
export default function LoginPage() {
  return (
    <div className=' w-full h-screen  shadow-white bg-netflixbgimage '>
      <div className='LPmain2 w-full h-full bg-black/70  flex flex-col justify-center items-center'>
        <div className="LPheader w-full h-h10 flex justify-center">
          <div className='w-4/5 h-full  flex items-center justify-between'>
            <img className=' w-36 h-36' src="//images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="Netflix Logo" />
          </div>
        </div>
        <div className="LoginPmain  text-white w-full h-h90 flex justify-center items-start pt-14">
          <div className="LPboxtext-white w-4/12 h-h75 bg-black/70 rounded-sm  flex flex-col justify-center items-center">
            <div className='w-10/12 h-full flex flex-col items-center justify-start'>
              <div className='w-full'>
                <h1 className='text-3xl text-white pl-8 font-bold pt-14 pb-7'>Sign In</h1>
              </div>
              <div className='flex flex-col w-full gap-4 items-center justify-center'>
                <input type="text" name="userid" placeholder='email or phone number' className=' px-4 w-10/12 h-14  bg-inputbg rounded-md text-white outline-none' />
                <input type="password" name="password" placeholder='password' className='px-4 w-10/12 h-14  bg-inputbg rounded-md text-white outline-none' />
                <Link className='w-10/12 h-12 flex items-center justify-center font-semibold text-white rounded-md bg-netflixRed mt-7' to="/home">Sign In</Link>
              </div>
              <div className='w-full px-8 pt-2 flex justify-between'>
                <div className='flex gap-1 justify-center items-center'>
                  <input type="checkbox" name="tick" className='bg-gray-600' />
                  <p className=' text-gray-400 font-medium'>Remember me</p>
                </div>
                <p className='text-gray-400 font-medium hover:underline'>Need help?</p>
              </div>
              <div className='w-full pl-8 pt-16'>
                <p className='text-gray-400 font-medium'>New to Netflix? <Link to="/" className='text-white hover:underline cursor-pointer'>Sign up now.</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
