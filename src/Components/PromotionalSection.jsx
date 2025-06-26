const PromotionalSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-12 px-4 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-yellow-300 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full uppercase mb-4">
            🔥 Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find Your Perfect Roommate & Save!
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            Get up to{" "}
            <span className="font-semibold text-blue-700">50% OFF</span> on your
            premium roommate post listings for this month. Connect faster,
            better, and safer with verified users!
          </p>
          <button
            onClick={() => {
              alert("Recently Expired This Offer");
            }}
            className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            Post Your Room Now
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://i.ibb.co/4RZkQsv1/last-minute-limited-offer-special-offer-sale-promo-button-logo-banner-last-day-last-hour-last-minute.jpg"
            alt="Roommate Promo"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;
