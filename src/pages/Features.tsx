import CoreFeature from "@/components/modules/Features/CoreFeature";
import FeatureBanner from "@/components/modules/Features/FeatureBanner";
import SecurityFeature from "@/components/modules/Features/SecurityFeature";

function Features() {
  return (
    <div>
      <FeatureBanner></FeatureBanner>
      <CoreFeature></CoreFeature>
      <SecurityFeature></SecurityFeature>
    </div>
  );
}

export default Features;
