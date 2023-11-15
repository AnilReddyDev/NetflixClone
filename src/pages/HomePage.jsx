import React from 'react'
import '../App.css'
export default function HomePage() {
  const netflixContent = [
    {
      title: "Stranger Things",
      img: "https://fossbytes.com/wp-content/uploads/2022/06/The-Buzz-Paper-1.jpeg",
      id: "001"
    },
    {
      title: "All of us are dead",
      img: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/02/all-of-us-are-dead-ending.jpg",
      id: "002"
    },
    {
      title: "Wednesday",
      img: "https://www.bloomingtonsouthoptimist.org/wp-content/uploads/2023/01/wednesday-netflix.jpg",
      id: "003"
    },
    {
      title: "money Heist",
      img: "https://english.cdn.zeenews.com/sites/default/files/2021/05/25/938590-money-heist.png",
      id: "004"
    },
    {
      title: "Squad Game",
      img: "https://www.superguidatv.it/wp-content/uploads/2021/10/Squid-game-2-si-far%C3%A0.jpg",
      id: "005"
    },
    {
      title: "Dark",
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202006/qc_12.jpeg?size=690:388",
      id: "006"
    },
  ]
  return (
    <div className='w-full h-fit bg-gray-900'>
      <div className='fixed bg-black'>
        <img src="https://occ-0-2042-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg?r=608" alt="Stranger Things" />
      </div>
      <div className='HPboxCon  relative w-full h-auto py-5 flex flex-col gap-5 left-0 '>
        <div className='px-10'>
          <h1 className='font-semibold text-2xl text-white'>Continue watching</h1>
          <div className='w-full flex  overflow-x-auto overflow-y-visible gap-2'>
            {netflixContent.map((items) => { // continue from here
              return <div className=" w-64 h-48 flex-none hover:scale-y-125 hover:scale-x-150 bg-pink-200" key={items.id}>
                <img src={items.img} alt={items.title} className='w-full h-full  z-20 transition-all ease-in' />
              </div>
            })}
          </div>
        </div>
        <div className='HPboxCon2 px-10 pb-10'>
          <h1 className=' font-semibold text-white  text-2xl'>Love Stories</h1>
          <div className='w-full flex  overflow-x-auto gap-2'>
            <div className=" px-36  h-48 bg-pink-200"></div>
            <div className=" px-36  h-48 bg-pink-200"></div>
            <div className=" px-36  h-48 bg-pink-200"></div>
            <div className=" px-36  h-48 bg-pink-200"></div>
            <div className=" px-36  h-48 bg-pink-200"></div>
            <div className=" px-36  h-48 bg-pink-200"></div>
            <div className=" px-36 h-48 bg-pink-200"></div>
            <div className=" px-36  h-48 bg-pink-200"></div>
          </div>
          <h1 className=' font-semibold text-white pt-4 text-2xl'>Action Stories</h1>
          <div className='w-full flex  overflow-x-auto gap-2'>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
          </div>
          <h1 className=' font-semibold text-white pt-4 text-2xl'>Romance Stories</h1>
          <div className='w-full flex  overflow-x-auto gap-2'>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
            <div className=" px-32 h-48 bg-pink-200"></div>
          </div>
        </div>
      </div>

    </div>
  )
}
