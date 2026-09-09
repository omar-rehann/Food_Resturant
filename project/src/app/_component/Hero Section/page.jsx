"use client"
import Button from 'react-bootstrap/Button';

function HeroSection(){
    return(
        <>
<section className="relative w-full">

  <img
    src="https://images.pexels.com/photos/5865152/pexels-photo-5865152.jpeg"
    alt="Food"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">

    <div className="max-w-2xl rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl p-10 border border-white/20">

      <h1 className="text-4xl font-bold md:text-6xl">
        Delicious Food
      </h1>

      <p className="mt-5 text-lg md:text-xl">
        Enjoy our delicious meals made with fresh ingredients.
      </p>

      <Button
        variant="outline-light"
        className="rounded-lg px-2 d-block mx-auto py-2 mt-6"
      >
        Order Now
      </Button>

    </div>

  </div>

</section>
        </>
    )
}
export default HeroSection