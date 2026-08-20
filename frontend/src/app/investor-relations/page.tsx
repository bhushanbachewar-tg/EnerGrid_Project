import InvestorCTA from "../../Components/InvestorRelations/InvestorCTA";
import InvestorHero from "../../Components/InvestorRelations/InvestorHero";
import InvestorOverview from "../../Components/InvestorRelations/InvestorOverview";
import InvestorResources from "../../Components/InvestorRelations/InvestorResources";
import InvestmentCommitment from "../../Components/InvestorRelations/InvestmentCommitment";
import PartnerHighlights from "../../Components/InvestorRelations/PartnerHighlights";
import StrategicPartners from "../../Components/InvestorRelations/StrategicPartners";

import "./investor-relations.css";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0B192C]">
      <InvestorHero />
      <InvestorOverview />
      <StrategicPartners />
      <PartnerHighlights />
      <InvestmentCommitment />
      <InvestorResources />
      <InvestorCTA />
    </main>
  );
}
