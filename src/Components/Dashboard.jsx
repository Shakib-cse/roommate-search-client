import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [allItems, setAllItems] = useState([]);
  const [myItems, setMyItems] = useState([]);
  const [available, setAvailable] = useState(0);

  // Fetch All Posts
  useEffect(() => {
    fetch("https://roommate-search-server.vercel.app/allPosts")
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
        if (user?.email) {
          const mine = data.filter((item) => item.userEmail === user.email);
          const totalAvailabality = data.filter(
            (a) => a.availability === "Available"
          );
          setAvailable(totalAvailabality);
          setMyItems(mine);
        }
      });
  }, [user]);

  return (
    <section className="w-11/12 mx-auto py-10 space-y-12 my-30">
      {/* Welcome & Stats */}
      <div>
        <h2 className="text-3xl font-bold mb-6">📊 Dashboard Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-base-200 p-4 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold">Total Listings</h3>
            <p className="text-2xl text-blue-700 font-semibold">
              {allItems.length}
            </p>
          </div>
          <div className="bg-base-200 p-4 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold">Available Room</h3>
            <p className="text-2xl text-yellow-700 font-semibold">
              {available.length}
            </p>
          </div>
          <div className="bg-base-200 p-4 rounded-lg shadow text-center">
            <h3 className="text-xl font-bold">My Listings</h3>
            <p className="text-2xl text-green-700 font-semibold">
              {myItems.length}
            </p>
          </div>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">
            👋 Welcome, {user?.displayName || "User"}
          </h3>
          <p>Email: {user?.email}</p>
        </div>
      </div>

      <Link
        to={"/addtofindroommate"}
        className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
      >
        ➕ Add New Listing
      </Link>

      {/* My Items */}
      <div>
        <div className="flex items-center justify-left gap-5 mb-2">
          <h2 className="text-2xl font-bold mb-4">🧍 My Listings</h2>
          <Link
            to={"/mylisting"}
            className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            Edit
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-base-100 shadow rounded-lg">
            <thead>
              <tr className="bg-base-200 text-left">
                <th className="p-3">Title</th>
                <th className="p-3">Location</th>
                <th className="p-3">Rent</th>
              </tr>
            </thead>
            <tbody>
              {myItems.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.location}</td>
                  <td className="p-3">${item.rent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* All Items */}
      <div>
        <div className="flex items-center justify-left gap-5 mb-2">
          <h2 className="text-2xl font-bold mb-4">📋 All Roommate Listings</h2>
          <Link
            to={"/browselisting"}
            className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            See All Listings
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-base-100 shadow rounded-lg">
            <thead>
              <tr className="bg-base-200 text-left">
                <th className="p-3">Title</th>
                <th className="p-3">Location</th>
                <th className="p-3">Rent</th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="p-3">{item.title}</td>
                  <td className="p-3">{item.location}</td>
                  <td className="p-3">${item.rent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
