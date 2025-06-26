import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { Fade, Zoom } from "react-awesome-reveal";

export default function BrowseListing() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://roommate-search-server.vercel.app/allPosts")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to fetch listings:", err));
    setLoading(false);
  }, []);

  if (loading) return <Loading />;
  if (!listings) return <Loading />;

  return (
    <div className="w-11/12 mx-auto my-30 space-y-6">
      <h2 className="text-4xl font-bold text-center text-primary mb-10">
        🏘️ Roommate Finder Posts
      </h2>

      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
        <Fade cascade damping={0.1}>
          {listings.map((post) => (
            <div
              key={post._id}
              className="bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">📍 {post.location}</p>
                </div>
                <div
                  className={`text-sm font-semibold px-3 py-1 rounded-full flex ${
                    post.availability === "Available"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {post.availability}
                </div>
              </div>

              <div className="space-y-1 text-base">
                <p>
                  <strong>💰 Rent:</strong> ${post.rent}
                </p>
                <p>
                  <strong>🛏️ Room Type:</strong> {post.roomType}
                </p>
                <p>
                  <strong>📞 Contact:</strong> {post.contact}
                </p>
                <p>
                  <strong>🧬 Lifestyle:</strong>{" "}
                  {post.lifestyle?.join(", ") || "N/A"}
                </p>
                <p className="line-clamp-3">
                  <strong>📝 Description:</strong> {post.description}
                </p>
              </div>

              <div className="mt-4 text-right">
                <Link
                  to={`/posts/${post._id}`}
                  className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}
