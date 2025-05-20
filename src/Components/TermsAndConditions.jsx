import Footer from "./Footer";
import Header from "./Header";

const TermsAndConditions = () => {
  return (
    <div>
        <header>
            <Header/>
        </header>
<main className=" w-11/12 mx-auto">
          <h1 className="text-3xl font-bold mb-4 py-5">Terms & Conditions</h1>
      <p className="mb-4">
        By using Roommate Finder, you agree to the following terms and conditions.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Service</h2>
      <p>
        You must be 18 years or older to use this service. You agree not to use
        our platform for unlawful purposes or to impersonate others.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">2. Account Responsibility</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        and all activities under it.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Listings & Communication</h2>
      <p>
        All roommate listings and messages must be truthful. We reserve the right
        to remove any content deemed inappropriate or fraudulent.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Modifications</h2>
      <p>
        We may update these terms at any time. Continued use of the platform means
        you accept those changes.
      </p>
</main>
<footer>
    <Footer/>
</footer>
    </div>
  );
};

export default TermsAndConditions;
