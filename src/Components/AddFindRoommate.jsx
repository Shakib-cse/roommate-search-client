import { use, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";

export default function AddFindRoommate() {
  const { user } = use(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
    roomType: "",
    lifestyle: [],
    description: "",
    contact: "",
    availability: "Available",
  });

  const userEmail = user?.email;
  const userName = user?.displayName || "User";

  const lifestyleOptions = ["Pets", "Smoking", "Night Owl", "Early Bird"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        lifestyle: checked
          ? [...prev.lifestyle, value]
          : prev.lifestyle.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const AllInfo = {
      ...formData,
      userEmail,
      userName,
    };
    console.log(AllInfo);

    //backend API submission here
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AllInfo),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          title: "Post successfull",
          icon: "success",
          draggable: true,
        });
        setFormData({
          title: "",
          location: "",
          rent: "",
          roomType: "",
          lifestyle: [],
          description: "",
          contact: "",
          availability: "Available",
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 mx-auto p-6 bg-base-300 rounded-2xl shadow-lg space-y-4 my-10"
    >
      <h2 className="text-2xl font-bold text-center">Add a New Listing</h2>

      <input
        type="text"
        name="title"
        placeholder="Title (e.g., Looking for a roommate in NYC)"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="number"
        name="rent"
        placeholder="Rent Amount"
        value={formData.rent}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-lg"
      />

      <select
        name="roomType"
        value={formData.roomType}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-lg bg-base-300"
      >
        <option value="">Select Room Type</option>
        <option value="Single">Single</option>
        <option value="Shared">Shared</option>
        <option value="Studio">Studio</option>
      </select>

      <div>
        <label className="block font-medium mb-1">Lifestyle Preferences:</label>
        <div className="flex flex-wrap gap-4">
          {lifestyleOptions.map((item) => (
            <label key={item} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="lifestyle"
                value={item}
                checked={formData.lifestyle.includes(item)}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        rows="4"
        className="w-full p-2 border rounded-lg"
      />

      <input
        type="text"
        name="contact"
        placeholder="Contact Info"
        value={formData.contact}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded-lg"
      />

      <select
        name="availability"
        value={formData.availability}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg bg-base-300"
      >
        <option value="Available">Available</option>
        <option value="Not Available">Not Available</option>
      </select>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          value={userEmail}
          readOnly
          className="w-full p-2 border rounded-lg bg-base-100"
        />
        <input
          type="text"
          value={userName}
          readOnly
          className="w-full p-2 border rounded-lg bg-base-100"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg cursor-pointer"
      >
        Add Listing
      </button>
    </form>
  );
}
