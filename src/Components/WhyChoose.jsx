import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

const WhyChoose = () => {
  return (
    <div>
      <Zoom><section className="w-11/12 mx-auto my-12 bg-base-300 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-center mb-4">
          Why Choose Roommate Search?
        </h2>
        <Fade>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-center">
          <li>✅ Verified Roommate Listings</li>
          <li>✅ Quick and Easy Filtering</li>
          <li>✅ Contact Directly with Owners</li>
          <li>✅ Safe and Community-Driven</li>
        </ul>
        </Fade>
      </section></Zoom>
    </div>
  );
};

export default WhyChoose;
