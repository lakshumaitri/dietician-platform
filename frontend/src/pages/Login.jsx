import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
        "http://127.0.0.1:5000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.token) {

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        navigate("/dashboard");
      }

      alert(data.message);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f3ee] px-6">

      <div className="bg-white w-full max-w-xl p-10 rounded-[35px]">

        <h1 className="text-5xl font-bold mb-10">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none"
            required
          />

          <button className="w-full bg-black text-white py-4 rounded-full hover:bg-[#c49a6c] duration-300">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;