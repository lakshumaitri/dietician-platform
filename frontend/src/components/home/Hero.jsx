function Hero({ setIsOpen }) {
  return (
    <section className="min-h-screen flex items-center bg-[#f8f3ee] pt-28 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6 md:px-10">

        <div>

          <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-5">
            Online Nutrition Coaching
          </p>

          <h1 className="text-5xl md:text-7xl leading-tight font-bold text-[#1e1e1e]">
            Transform
            <br />
            Your Health
            <br />
            Naturally.
          </h1>

          <p className="mt-8 text-gray-600 text-lg leading-8 max-w-xl">
            Personalized nutrition and wellness coaching designed to help you
            lose weight, improve gut health and create sustainable habits for life.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <button
              onClick={() => setIsOpen(true)}
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-[#c49a6c] duration-300"
            >
              Get Started
            </button>

            <button className="border border-black px-8 py-4 rounded-full hover:bg-black hover:text-white duration-300">
              Explore Programs
            </button>

          </div>

          <div className="flex gap-10 mt-14 flex-wrap">

            <div>
              <h2 className="text-3xl font-bold">
                500+
              </h2>

              <p className="text-gray-500 mt-2">
                Happy Clients
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                4.9★
              </h2>

              <p className="text-gray-500 mt-2">
                Client Rating
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                5+
              </h2>

              <p className="text-gray-500 mt-2">
                Years Experience
              </p>
            </div>

          </div>
        </div>

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop"
            alt="Dietician"
            className="rounded-[40px] shadow-2xl h-[750px] w-full object-cover"
          />

          <div className="absolute bottom-8 left-8 bg-white px-6 py-5 rounded-3xl shadow-xl">

            <p className="text-sm text-gray-500">
              Customized Meal Plans
            </p>

            <h3 className="font-bold text-xl mt-1">
              Sustainable Nutrition
            </h3>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;