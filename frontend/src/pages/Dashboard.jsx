import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f8f3ee]">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-4">
              Dashboard
            </p>

            <h1 className="text-5xl md:text-7xl font-bold">
              Welcome,
              <br />
              {user?.name}
            </h1>

          </div>

          <button
            onClick={handleLogout}
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-red-500 duration-300"
          >
            Logout
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white p-10 rounded-[35px]">

            <h2 className="text-4xl font-bold">
              12
            </h2>

            <p className="mt-4 text-gray-500">
              Active Programs
            </p>

          </div>

          <div className="bg-white p-10 rounded-[35px]">

            <h2 className="text-4xl font-bold">
              5
            </h2>

            <p className="mt-4 text-gray-500">
              Meal Plans
            </p>

          </div>

          <div className="bg-white p-10 rounded-[35px]">

            <h2 className="text-4xl font-bold">
              24
            </h2>

            <p className="mt-4 text-gray-500">
              Consultations
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;