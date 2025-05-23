import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";

export default function PostsDetails() {
  const { user } = use(AuthContext);
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [showContact, setShowContact] = useState(false);
  //const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://roommate-search-server.vercel.app/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLikeCount(data.likeCount || 0);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch post details:", err);
        setLoading(false);
      });
  }, [id]);

  const handleLike = () => {
    if (user.email === post.userEmail) {
      Swal.fire("You can't like your own post");
      return;
    }

      const newLikeCount = likeCount + 1;
  setLikeCount(newLikeCount);
  setShowContact(true);
    
    // const newLikeCount = likeCount + 1;
    // setLikeCount(newLikeCount);
    // setShowContact(true);
    // setLiked(true);

    // Update the like count on the server
    fetch(`https://roommate-search-server.vercel.app/posts/${id}/like`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ likeCount: newLikeCount }),
    }).catch((err) => console.error("Failed to update like count:", err));
  };

  if (loading) return <Loading />;
  if (!post) return <Loading />;

  return (
    <div className="w-11/12 mx-auto p-6 my-10 bg-base-200 rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>

      <p className="text-lg font-semibold text-blue-600 mb-4">
        {likeCount} people interested in
      </p>

      <div className="space-y-2">
        <p>
          <strong>Posted by:</strong> {post.userName} ({post.userEmail})
        </p>
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
        <p>
          <strong>Lifestyle Preferences:</strong>{" "}
          {post.lifestyle?.join(", ") || "None"}
        </p>
        <div>
          <strong>Description:</strong>
          <p className="mt-1">{post.description}</p>
        </div>
      </div>

      <div className="mt-6">
        {/* <button
          onClick={handleLike}
          disabled={liked}
          className={`px-6 py-2 rounded-lg font-semibold text-white ${
            liked
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 cursor-pointer"
          }`}
        >
          {liked ? "Liked" : "Like"}
        </button> */}
        <button
          onClick={handleLike}
          //disabled={liked}
          className={'px-6 py-2 rounded-lg font-semibold text-white bg-green-600 hover:bg-green-700 cursor-pointer'}
        >
          Like
        </button>

        {showContact && (
          <div className="mt-4 text-lg text-red-500">
            📞 Contact:
            <a href="tel:" className="underline ml-2">
              {post.contact}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
