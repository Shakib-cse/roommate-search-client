import Footer from "./Footer";
import Header from "./Header";

const PrivacyPolicy = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className=" w-11/12 mx-auto py-10">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="mb-4">
            Your privacy is important to us. This policy outlines how we
            collect, use, and protect your information.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p>
            We collect personal details (like name, email, and preferences) when
            you register or interact with our platform.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use It</h2>
          <p>
            To match you with potential roommates and improve our services. We
            do not sell your data to third parties.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
          <p>
            We use cookies to track usage and enhance your experience. You can
            disable them in your browser settings.
          </p>
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
          <p>
            We implement standard security measures to protect your information.
          </p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
