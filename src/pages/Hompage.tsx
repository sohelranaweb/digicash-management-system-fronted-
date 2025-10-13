import Banner from "@/components/modules/HomePage/Banner";
import Business from "@/components/modules/HomePage/Business";
import Experience from "@/components/modules/HomePage/Experience";
import Features from "@/components/modules/HomePage/Features";

function Hompage() {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Business></Business>
      <Experience></Experience>
    </div>
  );
}

export default Hompage;
