function Appstore() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="bg-gray-50 rounded-3xl border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-8 md:p-12">

            {/* Content */}
            <div>
              <span className="inline-flex items-center gap-2 text-[#D4A05C] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                <span className="w-8 h-px bg-[#D4A05C]"></span>
                Download Our App
              </span>

              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-5">
                Home services
                <br />
                at your fingertips.
              </h2>

              <p className="text-gray-500 leading-7 max-w-lg mb-8">
                Book trusted professionals, manage your appointments, and get
                reliable home services anytime, anywhere.
              </p>

              {/* Store Buttons */}
              <div className="flex flex-wrap gap-4">

                {/* App Store */}
                <a
                  href="#"
                  className="
                    flex items-center gap-3
                    bg-gray-900
                    text-white
                    px-5 py-3
                    rounded-xl
                    shadow-md
                    hover:bg-gray-800
                    transition-all
                    duration-300
                  "
                >
                  <i className="fab fa-apple text-2xl"></i>

                  <div className="text-left">
                    <span className="block text-[10px] text-gray-300">
                      Download on the
                    </span>
                    <span className="block text-sm font-semibold">
                      App Store
                    </span>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="#"
                  className="
                    flex items-center gap-3
                    bg-gray-900
                    text-white
                    px-5 py-3
                    rounded-xl
                    shadow-md
                    hover:bg-gray-800
                    transition-all
                    duration-300
                  "
                >
                  <i className="fab fa-google-play text-xl"></i>

                  <div className="text-left">
                    <span className="block text-[10px] text-gray-300">
                      GET IT ON
                    </span>
                    <span className="block text-sm font-semibold">
                      Google Play
                    </span>
                  </div>
                </a>

              </div>
            </div>

            {/* App Icon / Illustration */}
            <div className="flex justify-center md:justify-end">
              <div
                className="
                  w-64 h-64
                  rounded-[3rem]
                  bg-white
                  border border-[#D4A05C]/20
                  shadow-[0_15px_45px_rgba(0,0,0,0.08)]
                  flex items-center justify-center
                "
              >
                <div
                  className="
                    w-40 h-40
                    rounded-[2.5rem]
                    bg-[#D4A05C]/10
                    border border-[#D4A05C]/20
                    flex items-center justify-center
                  "
                >
                  <i className="fas fa-house-chimney text-6xl text-[#D4A05C]"></i>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Appstore;