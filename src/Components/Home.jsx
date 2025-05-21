
import Banner from "./Banner";
import Counter from "./Counter";
import FeturedRoommate from "./FeturedRoommate";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div>
      <Banner />
      <main>
        <FeturedRoommate/>
        <WhyChoose/>
        <Counter/>
      </main>
    </div>
  );
};

export default Home;
