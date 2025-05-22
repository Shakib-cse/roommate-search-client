import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function MyListing() {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-posts?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyPosts(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this listing permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/posts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your listing has been deleted.", "success");
              setMyPosts((prev) => prev.filter((post) => post._id !== id));
            }
          });
      }
    });
  };

  return (
    <section className="w-11/12 max-w-6xl mx-auto my-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">📋 My Listings</h2>

      {myPosts.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          You haven't added any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto bg-base-200 rounded-xl shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base">
            <thead className="bg-base-300">
              <tr>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Title</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Email</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Rent</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Availability</th>
                <th className="px-4 py-3 text-left font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {myPosts.map((post) => (
                <tr key={post._id} className="hover:bg-base-100">
                  <td className="px-4 py-3 whitespace-nowrap">{post.title}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{post.location}</td>
                  <td className="px-4 py-3 whitespace-nowrap">${post.rent}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        post.availability === "Available"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {post.availability}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap flex flex-col sm:flex-row gap-2">
                    <Link
                      to={`/update/${post._id}`}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-center"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-center"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
