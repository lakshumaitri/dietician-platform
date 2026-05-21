function Transformations() {

  const transformations = [
    {
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      name: "Priya",
      result: "Lost 12kg in 4 months",
    },

    {
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
      name: "Ananya",
      result: "Improved PCOS symptoms",
    },

    {
      image:
        "https://images.unsplash.com/photo-1518611012118-fb6c982c82b5?q=80&w=1200&auto=format&fit=crop",
      name: "Riya",
      result: "Better gut health & energy",
    },
  ];

  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex items-end justify-between mb-16">

          <div>

            <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-4">
              Transformations
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Real Client
              <br />
              Success Stories
            </h2>

          </div>

          <button className="hidden md:block border border-black px-7 py-3 rounded-full hover:bg-black hover:text-white duration-300">
            View More
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {transformations.map((item, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-[35px]"
            >

              <img
                src={item.image}
                alt={item.name}
                className="h-[550px] w-full object-cover group-hover:scale-110 duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 text-white">

                <h3 className="text-3xl font-bold">
                  {item.name}
                </h3>

                <p className="mt-3 text-lg text-gray-200">
                  {item.result}
                </p>

              </div>

            </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Transformations;