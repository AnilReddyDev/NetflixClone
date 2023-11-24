import React from 'react'
import '../App.css'
export default function HomePage() {
  const netflixSeriesContent = [
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
    {
      title: "Breaking Bad",
      img: "https://www.cnet.com/a/img/resize/31d9798922a9fd0bc47854e1fc8e7b226f2e5e3d/hub/2012/10/16/28212967-cbf2-11e2-9a4a-0291187b029a/breaking-bad-header.jpg?auto=webp&width=1200",
      id: "007"
    },
    {
      title: "Peaky Blinders",
      img: "https://media-mcetv.ouest-france.fr/wp-content/uploads/2022/01/netflix-cillian-murphy-promet-22du-lourd22-pour-peaky-blinders-saison-6-.jpeg",
      id: "008"
    },
    {
      title: "kaala Paani",
      img: "https://www.cineblues.com//uploads/article/kp-teaser-01-rgb-9-x-16-002-20230919234448856.jpg",
      id: "009"
    },
    {
      title: "The Railway man",
      img: "https://www.koimoi.com/wp-content/new-galleries/2023/09/yrf-netflix-set-multi-year-creative-partnership-starting-with-the-railway-men-001.jpg",
      id: "010"
    },
    {
      title: "Daredevil",
      img: "https://c4.wallpaperflare.com/wallpaper/335/411/593/daredevil-charlie-cox-netflix-wallpaper-preview.jpg",
      id: "011"
    },
    {
      title: "Narcos",
      img: "https://brief.promax.org/images/uploads/5723/narcosposter_cube__twocolumncontent.jpg",
      id: "012"
    },
    {
      title: "Top Boy",
      img: "https://occ.a.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW2FXyezQ3TFpHWepXLPVHX-zDV5S2WyNGbEPzNmrDVFlVyDcGz4eWg6KbA8TCO8TVROeic2fPpHqa0MIG6-AV7YrUSfG2ovJvDVtgGfEta5nvCodR4dhQGzKLyqdf7AXdAwnh3kcB1HI-C5LV00tSHJE0BMDHp4pBo8VQ6rgUNsdVnxw4kVKECWEZ9T7WxXQBHrB6lt_deQink2kTtQPS8L4vAhCx_hESNK9z0v_z4AArKNrV-alOLxbkvhuSelOrUn1bspb4yahVkRb7M_bDh5NhSuqkEC6XQeRVHYYEYQ-9PUhiV_.jpg?r=0c2",
      id: "013"
    },
    {
      title: "Our Planet",
      img: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTX11bs4mpJt2lUANAOLnmTVnxfVJjnlKkYAvFi9Hf5_bKo6OegZz0bTSW0p8tPGzG8GO82bvHiaUHKIlcTwASIXlQmn77DL8r-hgWb2OAtpCpvRJVLixFcUD8UxkydTCq2MWA.jpg?r=e29",
      id: "014"
    },
    {
      title: "After Life",
      img: "https://i.pinimg.com/originals/f1/82/43/f18243b1fd2d5ee7f3c46a96983d7879.jpg",
      id: "015"
    },
    {
      title: "Sex Education",
      img: "https://www.hindustantimes.com/ht-img/img/2023/08/31/1600x900/Screenshot_2023-08-31_235519_1693506340978_1693506363085.png",
      id: "016"
    },
  ]

  const netflixActionMovies = [
    {
      title:"The Night Comes for Us",
      img:"https://metadata-static.plex.tv/d/gracenote/d0ca98e6cccedd136edc075b5bce154a.jpg",
      id:"001"
    },
    {
      title:"Extraction",
      img:"https://woottoncommonsense.com/wp-content/uploads/2020/12/RgOWIjNBqW2ASCmQ3wuGb5GAYnDSRHd1EMipCwJI.jpeg",
      id:"002"
    },
    {
      title:"The Old Guard",
      img:"https://miro.medium.com/v2/resize:fit:1358/0*sbm45GK2WvG_oXic.jpg",
      id:"003"
    },
    {
      title:"Triple Frontier",
      img:"https://occ-0-33-1123.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXI9Ob2A56S0PNV8PM8Ww5Z-gIlwKzGz6PK5CVHE8ouGDVZK41W0bj5_cQ4echqy4p8xc4IgkmmLuMGStgsMPIz6amIDR20zpZ2A9IankKAJe95khNSc9rBNWKXiJ9UxbqtCRA.jpg?r=b25",
      id:"004"
    },
    {
      title:"Wheelman",
      img:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVt-wuVyU4TxbLTq4D9RF8RGsGBVVFnsX2eITVNIBPun257Vi1BccwgSumYLOq0Z9yQgYeagwfWUVPKa7XrMb9etsn241jTB6WPJwKGa40Txn03VmC_T9JK4ZuLjySUqpNcWvQ.jpg?r=f7b",
      id:"005"
    },
    {
      title:"Polar",
      img:"https://occ-0-34-300.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdP4jX3InivJmH3Zms1rSjPFSTe7et5xFLPOz9ygorsiVbKqKpw00ULLoXqLCsHjsf_4T7s7bdz8KwEOn0FlnPBSULD_flC3gmz7eK-hVV8Iz8GVjVCCS-Sh8CZ_dyrG8aEkpQ.jpg?r=a62",
      id:"006"
    },
    {
      title:"Bright",
      img:"https://occ-0-2433-56.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbEBrD45nXJeLtOYTlQG1QS2xbWaNIHeXFkmEDL3K2l-2a5OjqIwu46ED4Eb0IaHB5eLCjCksPo_y83JullnyH76i566R6WzUHlR245jOuChajpwvUP43b0_8IVg1OKFH8cfjg.jpg?r=57c",
      id:"007"
    },
    {
      title:"Spectral",
      img:"https://flixwatch.co/wp-content/uploads/80098200.jpg.webp",
      id:"008"
    },
    {
      title:"Lost Bullet",
      img:"https://occ-0-41-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZqPykTgWDVt-Nu0Buzv2ZQQ-gDGFL0azuGUrLObAZ4LmMV5hQsgncRLrL266oMIul_g26EdBFaRua7GdLgH77FmlS3Rk3_1WbYXpE9SLAxxPJmuWwhBU7DmdWUKIXJCbb5r9A.jpg?r=506",
      id:"009"
    },
    {
      title:"Kate",
      img:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/447b02151670607.630ff9c255f5a.jpg",
      id:"010"
    },
    {
      title:"Spenser Confidential",
      img:"https://occ-0-38-778.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQlrqsYEYKGH8fLLa_d54CGtygPyZToN_SFI6M1fnB3azkHl3HQcIv-IxzbfMrQMimzrsx8dBcLjsbycZhDHYHfT32jBzAg6X77i1-ZQSRAsiEANegJnj2Uf-h5XIst3QeaFuw.jpg?r=a57",
      id:"011"
    },
    {
      title:"6 Underground",
      img:"https://occ-0-114-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZDQb574eK3ctTQpZEHKZ2nfvHWmLPyqEwK_GvAqbQJl7Uwu3LaRf-eZOauzHXVz7Jq5ac2LkjY_9dB9Y_LpcSXOkuO4Mn_fe0rzc3bHBddG6ZrvHOFNOfI6zxMmNyCSrSA7Hw.jpg?r=074",
      id:"012"
    },
    {
      title:"Gunpowder Milkshake",
      img:"https://decider.com/wp-content/uploads/2021/07/GUNPOWDER-MILKSHAKE-NETFLIX-REVIEW.jpg?quality=75&strip=all&w=1200",
      id:"014"
    },
    {
      title:"Anon",
      img:"https://occ-0-1217-38.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABelovCu1TpsDVxpN-SlwzW1OSSWzIQmMsjsqomgp57iaBSOrlZxhH2kN5RW5mZP_i-j_ijScCVqQUvpJjN8Ep1uPUOLhiM_qOlpVlOXoOzj5wDmPTsjjjvK-bmPOWDRqj2rvBw.jpg?r=5ef",
      id:"015"
    },
  ]

  const netflixRomanceMovie = [
    {
      title:"Cinema Paradiso",
      img:"",
      id:"001"
    },
    {
      title:"Amelie",
      img:"",
      id:"002"
    },
    {
      title:"Annie Hall",
      img:"",
      id:"003"
    },
    {
      title:"Titanic",
      img:"",
      id:"004"
    },
    {
      title:"Days of Heaven",
      img:"",
      id:"005"
    },
    {
      title:"Manhattan",
      img:"",
      id:"006"
    },
    {
      title:"Blue is the Warmest Color",
      img:"",
      id:"007"
    },
    {
      title:"BrokeBack Mountain",
      img:"",
      id:"008"
    },
    {
      title:"Sense And Sensibility",
      img:"",
      id:"009"
    },
    {
      title:"Love Actually",
      img:"",
      id:"010"
    },
    {
      title:"From Here to Eternity",
      img:"",
      id:"011"
    },
    {
      title:"Fallen Angels",
      img:"",
      id:"012"
    },
    {
      title:"Weekend",
      img:"",
      id:"013"
    },
    {
      title:"The English Patient",
      img:"",
      id:"014"
    },
    {
      title:"Jane Eyre",
      img:"",
      id:"015"
    },
  ]

  const netflixHorrorContent = [
    {
      title:"the Ritual",
      img:"",
      id:"001"
    },
    {
      title:"The Good neighbor",
      img:"",
      id:"002"
    },
    {
      title:"The Conference",
      img:"",
      id:"003"
    },
    {
      title:"The Unholy",
      img:"",
      id:"004"
    },
    {
      title:"Evil Dead",
      img:"",
      id:"005"
    },
    {
      title:"Sister Death",
      img:"",
      id:"006"
    },
    {
      title:"Insidious the Red Door",
      img:"",
      id:"007"
    },
    {
      title:"The Black Phone",
      img:"",
      id:"008"
    },
    {
      title:"Annabelle",
      img:"",
      id:"009"
    },
    {
      title:"Babbe The possession",
      img:"",
      id:"010"
    },
    {
      title:"Exorcist The Beginning",
      img:"",
      id:"011"
    },
    {
      title:"No One Gets Out Alive",
      img:"",
      id:"012"
    },
    {
      title:"The Conjuring",
      img:"",
      id:"013"
    },
    {
      title:"Virupaksha",
      img:"",
      id:"014"
    },
    {
      title:"Mirrors",
      img:"",
      id:"015"
    },
  ]
  const netflixSciFanstasy = [
    {
      title:"Jurassic World Camp Cretaceous",
      img:"",
      id:"001"
    },
    {
      title:"One Piece",
      img:"",
      id:"002"
    },
    {
      title:"Ragnarok",
      img:"",
      id:"003"
    },
    {
      title:"Lost in Space",
      img:"",
      id:"004"
    },
    {
      title:"Alice in BorderLand",
      img:"",
      id:"005"
    },
    {
      title:"Wednesday",
      img:"",
      id:"006"
    },
    {
      title:"Raising Dion",
      img:"",
      id:"007"
    },
    {
      title:"Manifest",
      img:"",
      id:"008"
    },
    {
      title:"The Witcher",
      img:"",
      id:"009"
    },
    {
      title:"Sweet Tooth",
      img:"",
      id:"010"
    },
    {
      title:"Znation",
      img:"",
      id:"011"
    },
    {
      title:"Locke & Key",
      img:"",
      id:"012"
    },
    {
      title:"Another Life",
      img:"",
      id:"013"
    },
    {
      title:"Fantasy Island",
      img:"",
      id:"014"
    },
    {
      title:"Shadow and Bone",
      img:"",
      id:"015"
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
          <div className='w-full flex  overflow-x-auto  gap-2'>
            {netflixSeriesContent.map((items) => { // continue from here
              return <div className=" w-72 h-48 flex-none  bg-pink-200" key={items.id}>
                <img src={items.img} alt={items.title} className='w-full h-full overflow-hidden  z-20 hover:scale-125 transition-all ease-in' />
              </div>
            })}
          </div>
        </div>
        <div className='HPboxCon2 px-10 pb-10'>
          <h1 className=' font-semibold text-white  text-2xl'>Action & Adventure</h1>
          <div className='w-full flex  overflow-x-auto  gap-2'>
            {netflixActionMovies.map((items) => { // continue from here
              return <div className=" w-72 h-48 flex-none  bg-pink-200" key={items.id}>
                <img src={items.img} alt={items.title} className='w-full h-full overflow-hidden  z-20 hover:scale-125 transition-all ease-in' />
              </div>
            })}
          </div>
          <h1 className=' font-semibold text-white pt-4 text-2xl'>Action </h1>
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
