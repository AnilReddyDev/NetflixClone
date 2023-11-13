import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export default function LandingPage() {
    return (
        <div className=' w-full h-screen  shadow-white bg-netflixbgimage bg-cover'>
            <div className='LPmain2 w-full h-full bg-black/70  flex flex-col items-center'>
                <div className="LPheader w-full h-h10 flex justify-center">
                    <div className='w-4/5 h-full  flex items-center justify-between'>
                        <img className=' w-36 h-36' src="//images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="Netflix Logo" />
                        <div className='flex gap-5'>
                            <select name="language" id="languages" className='py-1 px-5 border text-white bg-transparent flex items-center border-gray-500 rounded-sm'>
                                <option value="volvo">English</option>
                                <option value="saab">Hindi</option>
                                <option value="mercedes">Telugu</option>
                            </select>
                            <Link className='px-5 rounded-md font-semibold py-1 bg-netflixRed text-white' to="/login">Sign In</Link>
                        </div>
                    </div>
                </div>
                <div className="LPmain  text-white w-full h-h90 flex justify-center items-center">
                    <div className=' w-4/5 pb-20 flex justify-center items-center gap-8 flex-col'>
                        <h1 className=' text-5xl font-bold '>
                            Laughter. Tears. Thrills. Find it all on Netflix.</h1>
                        <p className='text-2xl font-normal'>Join today. Cancel anytime.</p>
                        <p className='text-xl font-normal'>Ready to watch? Enter your email to create or restart your membership.</p>
                        <div className='flex gap-3'>
                            <input type="email" name="email" id="email" placeholder='Email address' className=' h-14 outline-none px-2 w-96 bg-transparent border border-gray-500 rounded-md' />
                            <Link to="/login" className='h-14 flex justify-center items-center gap-1 bg-netflixRed text-white w-44 text-xl font-semibold rounded-md'>Get Started <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                            </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
