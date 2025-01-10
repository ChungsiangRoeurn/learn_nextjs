import { HeroItems } from "@/constants/HeroItems"
import { NavData } from "@/constants/NavHero"
import Link from "next/link"

const Hero = () => {
  return (
    <div>
      <div
        className="hero object-cover min-h-screen"
        style={{
          backgroundImage: "url(https://media.istockphoto.com/id/504703270/photo/phnom-penh-cambodia.jpg?s=612x612&w=0&k=20&c=fuZU-aRSYeaBx6gPb8i8HhXqoqvoWqEtOyRXuq8trb8=)",
        }}>
        <div className="hero-overlay bg-opacity-60">
          <div className='flex justify-between items-center py-8 max-w-[1200px] mx-auto px-7 lg:px-0'>
            <Link href={"/"} className='font-bold text-4xl text-warning'>
              Doci<span className='text-primary'>fyy</span>
            </Link>
            <ul className='flex items-center gap-12 text-xl font-mono'>
              <ul className='gap-16 hidden md:flex'>
                {NavData.map((item) => (
                  <li key={item.id} className='group relative'>
                    <Link
                      href={item.href}
                      className='text-warning transition-colors duration-300 hover:text-prsimary'
                    >
                      {item.title}
                    </Link>
                    <span className='absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 transition-all duration-300 group-hover:scale-x-100'></span>
                  </li>
                ))}
              </ul>
              <Link href='/login' className='btn btn-primary text-warning text-xl hover:bg-primary hover:text-white transition-colors duration-300'>
                Login
              </Link>
            </ul>
          </div>

        </div>
        <div className="hero-content text-neutral-content text-center">
          <div className="fade-slide-up">
            <h1 className="mb-5 text-5xl font-bold">
              {
                HeroItems.map((item) => {
                  return (
                    <div className="uppercase" key={item.id}>
                      {item.title}
                    </div>
                  )
                })
              }
            </h1>

            <p className="mb-5">
              This platform is designed to help you manage your tasks and projects efficiently.
              <br />
              Before y'all can try this, please make sure you are logged in.
            </p>
            <Link href='/login' className="btn btn-primary text-secondary-content">{HeroItems[0].getStarted}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
