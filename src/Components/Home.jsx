
import { Fade } from "react-awesome-reveal";
import Banner from "./Banner";
import Counter from "./Counter";
import FeturedRoommate from "./FeturedRoommate";
import WhyChoose from "./WhyChoose";
import PromotionalSection from "./PromotionalSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <main>
        <FeturedRoommate/>
        <Fade><Counter/></Fade>
        <PromotionalSection/>
        <WhyChoose/>
      </main>
    </div>
  );
};

export default Home;
