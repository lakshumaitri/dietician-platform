function CTA({ setIsOpen }) {
  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          Start Your Wellness
          <br />
          Journey Today
        </h2>

        <p className="mt-8 text-gray-300 text-lg leading-8">
          Personalized nutrition plans and expert guidance tailored for your lifestyle.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-10 bg-white text-black px-8 py-4 rounded-full hover:bg-[#c49a6c] duration-300"
        >
          Book Consultation
        </button>

      </div>
    </section>
  );
}

export default CTA;