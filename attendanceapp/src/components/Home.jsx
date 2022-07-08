import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Style/Home.css";


import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'


import bgImg from '../assets/staff-attendance.png'

const Home = () => {

  const navigate = useNavigate();
  
    const loginPage = () => {
        navigate("/profile")
    }

  return (
    <>
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
    <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl'>Free Forever Attendance, Payroll & HR Platform</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>HRICA</h1>
            <p className='text-2xl'>This is our Tech brand.</p>
            <button onClick={loginPage} class="inline-block bg-blue-600 px-6 py-2 rounded-full btn-primary text-white font-bold mt-12">Get Started</button>
        </div>
        <div>
            <img className='w-full' style={{width:"1000px",}} src={bgImg} alt="/" />
        </div>
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl'>
            <p>Services</p>
            <div className='flex justify-between flex-wrap px-4'>
                <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 hover:animate-ping text-indigo-600' />Manage Employee</p>
                <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 hover:animate-ping text-indigo-600' />Leave and Attendance</p>
                <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 hover:animate-ping text-indigo-600' />Leave Management</p>
                {/* <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 hover:animate-ping text-indigo-600' />Payroll</p> */}
            </div>
        </div>
    </div>
</div>


</>
  )
}

export default Home