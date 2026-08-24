import InvestorCTA from "../../Components/InvestorRelations/InvestorCTA";
import InvestorIntroHero from "../../Components/InvestorRelations/InvestorIntroHero";
import InvestorOverview from "../../Components/InvestorRelations/InvestorOverview";
import InvestorResources from "../../Components/InvestorRelations/InvestorResources";
import InvestmentCommitment from "../../Components/InvestorRelations/InvestmentCommitment";
import PartnerHighlights from "../../Components/InvestorRelations/PartnerHighlights";
import StrategicPartners from "../../Components/InvestorRelations/StrategicPartners";

import "./investor-relations.css";

export default function Page() {
  return (
    <main className="min-h-screen bg-background font-sans text-primary">
      <InvestorIntroHero />
      <InvestorOverview />
      <StrategicPartners />
      <PartnerHighlights />
      <InvestmentCommitment />
      <InvestorResources />
      <InvestorCTA />
    </main>
  );
}
