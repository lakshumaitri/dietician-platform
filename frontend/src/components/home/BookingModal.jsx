import { useState } from "react";
import API from "../../api/axios";

function BookingModal({ isOpen, setIsOpen }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    goals: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/create-booking",
        formData
      );

      alert(response.data.message);

      setIsOpen(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "",
        goals: "",
      });

    } catch (error) {

      alert("Something went wrong");

      console.log(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center px-6 overflow-y-auto py-10">

      <div className="bg-white w-full max-w-2xl rounded-[35px] p-8 md:p-12 relative">

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-3xl"
        >
          ×
        </button>

        <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-4">
          Book Consultation
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Start Your
          <br />
          Wellness Journey
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none"
            required
          />

          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none"
            required
          >

            <option value="">
              Select Program
            </option>

            <option>
              Weight Loss
            </option>

            <option>
              PCOS Management
            </option>

            <option>
              Gut Health
            </option>

            <option>
              Muscle Gain
            </option>

          </select>

          <textarea
            rows="4"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
            placeholder="Tell us about your goals..."
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-full hover:bg-[#c49a6c] duration-300"
          >
            Book Consultation
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookingModal;