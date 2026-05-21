function AboutSection() {
  return (
    <section className="py-28 bg-[#f8f3ee]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6 md:px-10">

        <div>

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
            alt="Dietician"
            className="rounded-[40px] h-[700px] w-full object-cover"
          />
        </div>

        <div>

          <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-5">
            About Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Helping You Build
            <br />
            A Healthy Lifestyle
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-8">
            We focus on sustainable nutrition and wellness programs that fit
            your lifestyle. Our mission is to help you transform your health
            naturally without restrictive diets.
          </p>

          <button className="mt-10 bg-black text-white px-8 py-4 rounded-full hover:bg-[#c49a6c] duration-300">
            Learn More
          </button>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;