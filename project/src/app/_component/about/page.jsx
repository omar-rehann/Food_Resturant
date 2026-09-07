import Image from "next/image";

function About() {
  const stats = [
    { value: "12+", label: "Years of Experience" },
    { value: "40+", label: "Signature Dishes" },
    { value: "15k+", label: "Happy Guests" },
  ];

  return (
    <section className=" py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Content - Left */}
        <div>
          <span className="inline-flex items-center gap-2 text-[#B4813C] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <span className="w-8 h-px bg-[#B4813C]"></span>
            About Us
          </span>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-[#171310] mb-6">
            A table where every
            <br />
            recipe has a story.
          </h2>

          <p className="text-[#171310]/70 text-base leading-7 mb-4">
            What started as a small family kitchen has grown into a place
            guests return to again and again. We still cook the way we did on
            day one — fresh ingredients, honest recipes, and a lot of care in
            every plate we send out.
          </p>

          <p className="text-[#171310]/70 text-base leading-7 mb-8">
            From the morning market run to the last table served at night,
            everything we do is built around one goal: making you feel like
            you&apos;re eating somewhere that actually cares.
          </p>

          <button className="bg-[#171310] rounded text-[#F3EDE4] px-7 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#2A231C] transition-colors duration-300">
            Discover Our Story
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#171310]/10">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="font-serif text-3xl text-[#B4813C] mb-1">
                  {stat.value}
                </p>
                <p className="text-[#171310]/60 text-xs leading-5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image - Right */}
        <div className="relative">
          <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdHVyYW50fGVufDB8fDB8fHww"
              alt="Chef preparing a signature dish"
              fill
              className="object-cover"
            />
          </div>

          {/* Accent frame */}
          <div className="hidden md:block absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-[#B4813C] rounded-[2rem] -z-10"></div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 left-6 bg-[#171310] text-[#F3EDE4] rounded-2xl px-6 py-4 shadow-xl flex items-center gap-3">
            <i className="fa-solid fa-hat-chef text-[#B4813C] text-xl"></i>
            <div>
              <p className="text-sm font-semibold leading-4">Chef&apos;s Choice</p>
              <p className="text-xs text-[#F3EDE4]/60 leading-4">Award-winning menu</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;