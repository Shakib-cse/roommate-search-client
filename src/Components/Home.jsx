
import { Zoom } from "react-awesome-reveal";
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
        <Zoom><Counter/></Zoom>
        <WhyChoose/>
      </main>
    </div>
  );
};

export default Home;
