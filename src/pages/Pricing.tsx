import PricingBanner from "@/components/modules/pricing/PricingBanner";
import PricingCard from "@/components/modules/pricing/PricingCard";
import PricingDetails from "@/components/modules/pricing/PricingDetails";
import PricingFAQ from "@/components/modules/pricing/PricingFAQ";

function Pricing() {
  return (
    <div>
      <PricingBanner></PricingBanner>
      <PricingCard></PricingCard>
      <PricingDetails></PricingDetails>
      <PricingFAQ></PricingFAQ>
    </div>
  );
}

export default Pricing;
