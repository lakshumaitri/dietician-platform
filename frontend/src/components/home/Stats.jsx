function Stats() {

  const stats = [
    {
      number: "10k+",
      text: "Healthy Meals Planned",
    },

    {
      number: "500+",
      text: "Transformation Stories",
    },

    {
      number: "98%",
      text: "Client Satisfaction",
    },

    {
      number: "24/7",
      text: "Support & Guidance",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-4 gap-10">

          {stats.map((item, index) => (

            <div
              key={index}
              className="text-center"
            >

              <h2 className="text-5xl font-bold text-[#c49a6c]">
                {item.number}
              </h2>

              <p className="mt-4 text-gray-300">
                {item.text}
              </p>

            </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;