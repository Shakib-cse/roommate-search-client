import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import "../../src/App"; // optional if using your own fadein animation

export default function MyListing() {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  const lifestyleOptions = ["Pets", "Smoking", "Night Owl", "Early Bird"];

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
              Swal.fire(
                "Deleted!",
                "Your listing has been deleted.",
                "success"
              );
              setMyPosts((prev) => prev.filter((post) => post._id !== id));
            }
          });
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedPost = {
      title: form.title.value,
      location: form.location.value,
      rent: parseFloat(form.rent.value),
      roomType: form.roomType.value,

      lifestyle: Array.from(form.lifestyle)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value),

      description: form.description.value,
      contact: form.contact.value,
      availability: form.availability.value,
      name: form.name.value,
      email: form.email.value,
    };

    fetch(`http://localhost:3000/posts/${editingPost._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Updated!", "Your listing has been updated.", "success");
        setMyPosts((prev) =>
          prev.map((post) =>
            post._id === editingPost._id ? { ...post, ...updatedPost } : post
          )
        );
        setEditingPost(null);
      });
  };

  return (
    <section className="w-11/12 max-w-6xl mx-auto my-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        📋 My Listings
      </h2>

      {myPosts.length === 0 ? (
        <p className="text-center text-lg text-gray-600">
          You haven't added any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto bg-base-200 rounded-xl shadow">
          <table className="min-w-full divide-y divide-gray-200 text-sm sm:text-base text-center">
            <thead className="bg-base-300">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Rent</th>
                <th className="px-4 py-3">Availability</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              {myPosts.map((post) => (
                <tr key={post._id} className="hover:bg-base-100">
                  <td className="px-4 py-3">{post.title}</td>
                  <td className="px-4 py-3">{post.userEmail}</td>
                  <td className="px-4 py-3">{post.rent} tk.</td>
                  <td className="px-4 py-3">
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
                  <td className="px-4 py-3 flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={() => {
                        setEditingPost(post)
                        console.log(post);
                      }}
                      className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
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

      {/* 🚀 Update Modal with smooth animation */}
      {editingPost && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center transition-all duration-300">
          <div className="bg-base-200 p-6 rounded-xl w-11/12 max-w-lg transform scale-100 animate-fadeIn relative scroll-auto">
            <button
              onClick={() => setEditingPost(null)}
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black cursor-pointer"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">Update Your Post</h3>
            <form onSubmit={handleUpdate} className="space-y-4 scroll-auto">
              <input
                type="text"
                name="title"
                defaultValue={editingPost.title}
                required
                className="input input-bordered w-full"
                placeholder="Title"
              />
              <input
                type="text"
                name="location"
                defaultValue={editingPost.location}
                required
                className="input input-bordered w-full"
                placeholder="Location"
              />
              <input
                type="number"
                name="rent"
                defaultValue={editingPost.rent}
                required
                className="input input-bordered w-full"
                placeholder="Rent"
              />
              <select
                name="roomType"
                defaultValue={editingPost.roomType}
                required
                className="w-full p-2 border rounded-lg bg-base-100"
              >
                <option value="">Select Room Type</option>
                <option value="Single">Single</option>
                <option value="Shared">Shared</option>
                <option value="Studio">Studio</option>
              </select>

              <div>
                <label className="block font-medium mb-1">
                  Lifestyle Preferences:
                </label>
                <div className="flex flex-wrap gap-4">
                  {lifestyleOptions.map((item) => (
                    <label key={item} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="lifestyle"
                        value={item}
                        defaultChecked={editingPost.lifestyle?.includes(item)}
                      />

                      {item}
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                name="description"
                placeholder="Description"
                defaultValue={editingPost.description}
                required
                rows="1"
                className="w-full p-2 border rounded-lg"
              />

              <input
                type="text"
                name="contact"
                placeholder="Contact Info"
                defaultValue={editingPost.contact}
                required
                className="w-full p-2 border rounded-lg"
              />
              <select
                name="availability"
                defaultValue={editingPost.availability}
                className="select select-bordered w-full"
              >
                <option>Available</option>
                <option>Not Available</option>
              </select>
              <div className="flex justify-center items-center gap-1">
                <input
                  type="text"
                  name="name"
                  readOnly
                  value={user?.displayName}
                  className="input input-bordered w-full bg-base-300 outline-0"
                />
                <input
                  type="email"
                  name="email"
                  readOnly
                  value={user?.email}
                  className="input input-bordered w-full bg-base-300 outline-0"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full mt-2">
                Update Post
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
