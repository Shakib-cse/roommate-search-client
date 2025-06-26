import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const FeturedRoommate = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    fetch("https://roommate-search-server.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => setFeaturedPosts(data));
  }, []);

  return (
    <section className="w-11/12 mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        🏠 Featured Roommates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPosts.map((post) => (
          <Fade key={post._id} triggerOnce>
            <div className="bg-base-200 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              {/* Optional: Image */}
              {/* {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-40 w-full object-cover"
                />
              )} */}

              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="space-y-1 mb-3">
                  <h3 className="text-xl font-semibold text-primary">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">📍 {post.location}</p>
                  <p className="text-sm">
                    💰 <strong>Rent:</strong> {post.rent} tk.
                  </p>
                  <p className="text-sm">
                    🛏 <strong>Room Type:</strong> {post.roomType}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  {/* Availability Badge */}
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      post.availability === "Available"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {post.availability}
                  </span>

                  {/* See More Button */}
                  <Link
                    to={`/posts/${post._id}`}
                    className="text-sm text-white bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-md"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      <button className="w-full mt-10">
        <Link
          to="/browselisting"
          className="text-sm text-white bg-green-600 hover:bg-green-700 transition-colors px-4 py-2 rounded-md"
        >
          See More
        </Link>
      </button>
    </section>
  );
};

export default FeturedRoommate;
