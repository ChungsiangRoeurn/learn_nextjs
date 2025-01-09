import { HeroItems } from "@/constants/HeroItems"
import Navbar from "../global/Navbar"
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
          <Navbar />

        </div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              {
                HeroItems.map((item) => {
                  return (
                    <div className="uppercase" key={item.id}>{item.title}</div>
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
