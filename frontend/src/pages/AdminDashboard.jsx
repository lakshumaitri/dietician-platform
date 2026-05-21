import { useEffect, useState } from "react";

function AdminDashboard() {

  const [users, setUsers] = useState([]);

  const [bookings, setBookings] = useState([]);

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    fetchUsers();

    fetchBookings();

    fetchMessages();

  }, []);

  const fetchUsers = async () => {

    try {

      const response = await fetch(
        '${import.meta.env.VITE_API_URL}users',
      );

      const data = await response.json();

      setUsers(data);

    } catch (error) {

      console.log(error);
    }
  };

  const fetchBookings = async () => {

    try {

      const response = await fetch(
        '${import.meta.env.VITE_API_URL}/all-bookings',
      );

      const data = await response.json();

      setBookings(data);

    } catch (error) {

      console.log(error);
    }
  };

  const fetchMessages = async () => {

    try {

      const response = await fetch(
        '${import.meta.env.VITE_API_URL}/all-messages',
      );

      const data = await response.json();

      setMessages(data);

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f3ee]">

      <div className="flex">

        {/* SIDEBAR */}

        <div className="w-[280px] min-h-screen bg-black text-white p-10 hidden md:block">

          <h1 className="text-4xl font-bold">
            Nourish
          </h1>

          <div className="mt-16 space-y-8 text-lg">

            <p className="text-[#c49a6c]">
              Dashboard
            </p>

            <p>
              Users
            </p>

            <p>
              Bookings
            </p>

            <p>
              Messages
            </p>

          </div>

        </div>

        {/* MAIN CONTENT */}

        <div className="flex-1 p-6 md:p-10">

          <div className="flex items-center justify-between">

            <div>

              <p className="uppercase tracking-[5px] text-[#c49a6c] text-sm mb-4">
                Admin Panel
              </p>

              <h1 className="text-5xl md:text-7xl font-bold">
                Dashboard
              </h1>

            </div>

          </div>

          {/* CARDS */}

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-[35px] p-10">

              <h2 className="text-5xl font-bold">
                {users.length}
              </h2>

              <p className="mt-4 text-gray-500 text-lg">
                Registered Users
              </p>

            </div>

            <div className="bg-white rounded-[35px] p-10">

              <h2 className="text-5xl font-bold">
                {bookings.length}
              </h2>

              <p className="mt-4 text-gray-500 text-lg">
                Total Bookings
              </p>

            </div>

            <div className="bg-white rounded-[35px] p-10">

              <h2 className="text-5xl font-bold">
                {messages.length}
              </h2>

              <p className="mt-4 text-gray-500 text-lg">
                Contact Messages
              </p>

            </div>

          </div>

          {/* BOOKINGS TABLE */}

          <div className="bg-white rounded-[35px] p-8 mt-16 overflow-x-auto">

            <h2 className="text-3xl font-bold mb-8">
              Consultation Bookings
            </h2>

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4">
                    Name
                  </th>

                  <th className="text-left py-4">
                    Email
                  </th>

                  <th className="text-left py-4">
                    Phone
                  </th>

                  <th className="text-left py-4">
                    Program
                  </th>

                </tr>

              </thead>

              <tbody>

                {bookings.map((booking) => (

                  <tr
                    key={booking.id}
                    className="border-b"
                  >

                    <td className="py-4">
                      {booking.name}
                    </td>

                    <td className="py-4">
                      {booking.email}
                    </td>

                    <td className="py-4">
                      {booking.phone}
                    </td>

                    <td className="py-4">
                      {booking.program}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* USERS TABLE */}

          <div className="bg-white rounded-[35px] p-8 mt-16 overflow-x-auto">

            <h2 className="text-3xl font-bold mb-8">
              Registered Users
            </h2>

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="text-left py-4">
                    Name
                  </th>

                  <th className="text-left py-4">
                    Email
                  </th>

                </tr>

              </thead>

              <tbody>

                {users.map((user) => (

                  <tr
                    key={user.id}
                    className="border-b"
                  >

                    <td className="py-4">
                      {user.name}
                    </td>

                    <td className="py-4">
                      {user.email}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* MESSAGES */}

          <div className="bg-white rounded-[35px] p-8 mt-16">

            <h2 className="text-3xl font-bold mb-8">
              Contact Messages
            </h2>

            <div className="space-y-6">

              {messages.map((message) => (

                <div
                  key={message.id}
                  className="border rounded-2xl p-6"
                >

                  <h3 className="text-2xl font-semibold">
                    {message.name}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {message.email}
                  </p>

                  <p className="mt-4 text-lg">
                    {message.message}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;