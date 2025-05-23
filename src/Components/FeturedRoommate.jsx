import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const FeturedRoommate = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => setFeaturedPosts(data));
  }, []);

  return (
    <div>
      <section className="w-11/12 mx-auto my-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          🏠 Featured Roommates
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Zoom>
              <div
              key={post._id}
              className="bg-base-200 p-4 rounded-xl shadow-lg space-y-2"
            >
              <Fade>
                <h3 className="text-xl font-semibold">{post.title}</h3>
              <p>
                <strong>Location:</strong> {post.location}
              </p>
              <p>
                <strong>Rent:</strong> ${post.rent}
              </p>
              <p>
                <strong>Room Type:</strong> {post.roomType}
              </p>
              <p>
                <strong>Availability:</strong> {post.availability}
              </p>
              </Fade>
              <Link
                to={`/posts/${post._id}`}
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                See More
              </Link>
            </div>
            </Zoom>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeturedRoommate;
