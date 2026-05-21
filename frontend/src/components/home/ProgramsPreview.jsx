function ProgramsPreview() {

  const programs = [
    {
      title: "Weight Loss",
      desc: "Sustainable fat loss with personalized meal plans and lifestyle coaching.",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "PCOS Management",
      desc: "Hormone-friendly nutrition designed to improve energy and balance.",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "Gut Health",
      desc: "Improve digestion, immunity and overall wellness naturally.",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex items-end justify-between mb-16">

          <div>
            <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-4">
              Our Programs
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Personalized Wellness
              <br />
              Programs
            </h2>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {programs.map((program, index) => (

            <div
              key={index}
              className="group bg-[#f8f3ee] rounded-[35px] overflow-hidden hover:-translate-y-2 duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={program.image}
                  alt={program.title}
                  className="h-[320px] w-full object-cover group-hover:scale-110 duration-700"
                />
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {program.desc}
                </p>

                <button className="mt-8 bg-black text-white px-6 py-3 rounded-full hover:bg-[#c49a6c] duration-300">
                  Learn More
                </button>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsPreview;