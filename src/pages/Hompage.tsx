import Banner from "@/components/modules/HomePage/Banner";
import Business from "@/components/modules/HomePage/Business";
import DownloadApp from "@/components/modules/HomePage/DownloadApp";
import Experience from "@/components/modules/HomePage/Experience";
import Features from "@/components/modules/HomePage/Features";
import Started from "@/components/modules/HomePage/Started";
import Testimonials from "@/components/modules/HomePage/Testimonials";

function Hompage() {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Business></Business>
      <Experience></Experience>
      <Started></Started>
      <Testimonials></Testimonials>
      <DownloadApp></DownloadApp>
    </div>
  );
}

export default Hompage;
