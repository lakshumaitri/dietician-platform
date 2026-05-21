import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import ProgramsPreview from "../components/home/ProgramsPreview";
import AboutSection from "../components/home/AboutSection";
import Transformations from "../components/home/Transformations";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Footer from "../components/layout/Footer";
import BookingModal from "../components/home/BookingModal";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import AdminDashboard from "../pages/AdminDashboard";
function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

      <Navbar setIsOpen={setIsOpen} />

      <Hero setIsOpen={setIsOpen} />

      <Stats />

      <ProgramsPreview />

      <AboutSection />

      <Transformations />

      <Testimonials />

      <CTA setIsOpen={setIsOpen} />

      <Footer />

      <BookingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </div>
  );
}

function About() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>

      <Navbar setIsOpen={setIsOpen} />

      <div className="pt-40 pb-28 bg-[#f8f3ee]">

        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-5">
              About Us
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Helping You
              <br />
              Feel Better
              <br />
              Naturally
            </h1>

            <p className="mt-8 text-gray-600 text-lg leading-8">
              We create sustainable nutrition programs tailored for your body,
              goals and lifestyle. Our mission is to help you transform your
              health naturally without crash diets or restrictions.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="mt-10 bg-black text-white px-8 py-4 rounded-full hover:bg-[#c49a6c] duration-300"
            >
              Book Consultation
            </button>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
              alt="Dietician"
              className="rounded-[40px] h-[700px] w-full object-cover"
            />

          </div>

        </div>
      </div>

      <Footer />

      <BookingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </div>
  );
}

function Programs() {

  const [isOpen, setIsOpen] = useState(false);

  const programs = [
    {
      title: "Weight Loss",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
      desc: "Sustainable fat loss with personalized meal plans.",
    },

    {
      title: "PCOS Management",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop",
      desc: "Hormone-friendly nutrition plans for better wellness.",
    },

    {
      title: "Gut Health",
      image:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop",
      desc: "Improve digestion, energy and immunity naturally.",
    },

    {
      title: "Muscle Gain",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
      desc: "Build strength with high-protein nutrition plans.",
    },
  ];

  return (
    <div>

      <Navbar setIsOpen={setIsOpen} />

      <section className="pt-40 pb-28 bg-white">

        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-4">
              Programs
            </p>

            <h1 className="text-5xl md:text-7xl font-bold">
              Wellness Programs
            </h1>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {programs.map((program, index) => (

              <div
                key={index}
                className="bg-[#f8f3ee] rounded-[35px] overflow-hidden"
              >

                <img
                  src={program.image}
                  alt={program.title}
                  className="h-[350px] w-full object-cover"
                />

                <div className="p-10">

                  <h2 className="text-4xl font-bold">
                    {program.title}
                  </h2>

                  <p className="mt-5 text-gray-600 text-lg leading-8">
                    {program.desc}
                  </p>

                  <button
                    onClick={() => setIsOpen(true)}
                    className="mt-8 bg-black text-white px-8 py-4 rounded-full hover:bg-[#c49a6c] duration-300"
                  >
                    Enroll Now
                  </button>

                </div>

              </div>

            ))}
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </div>
  );
}

function Contact() {

  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/send-message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div>

      <Navbar setIsOpen={setIsOpen} />

      <section className="pt-40 pb-28 bg-[#f8f3ee]">

        <div className="max-w-4xl mx-auto px-6 md:px-10">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-4">
              Contact
            </p>

            <h1 className="text-5xl md:text-7xl font-bold">
              Get In Touch
            </h1>

          </div>

          <div className="bg-white rounded-[35px] p-8 md:p-12">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
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

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none resize-none"
                required
              ></textarea>

              <button className="w-full bg-black text-white py-4 rounded-full hover:bg-[#c49a6c] duration-300">
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/programs" element={<Programs />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />

        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;

