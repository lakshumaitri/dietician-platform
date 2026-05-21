function Testimonials() {

  const reviews = [
    {
      name: "Priya Sharma",
      text: "This program completely changed my lifestyle and my relationship with food. I finally feel healthy and confident.",
    },

    {
      name: "Ananya Patel",
      text: "The nutrition plans were realistic and sustainable. I never felt restricted while losing weight.",
    },

    {
      name: "Riya Kapoor",
      text: "I noticed major improvements in my gut health, energy and skin within just a few weeks.",
    },
  ];

  return (
    <section className="py-28 bg-[#f8f3ee]">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Loved By Clients
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <div
              key={index}
              className="bg-white p-10 rounded-[35px] shadow-sm hover:-translate-y-2 duration-500"
            >

              <div className="flex text-[#c49a6c] text-2xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-600 leading-8 text-lg">
                {review.text}
              </p>

              <div className="mt-8">

                <h3 className="text-2xl font-bold">
                  {review.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  Client
                </p>

              </div>

            </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;