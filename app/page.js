import Image from "next/image";
import {} from "./theme/themeRegistry";
import HeroHome from "./components/Hero";
import SingleReview from "./components/Hero/SingleReview";
import ConversionRate from "./components/Hero/ConversionRate";
import ExpertHelp from "./components/ExpertHelp";
import HelpBanner from "./components/Banner/HelpBanner";

export default function Home() {
  return (
    <>
      <HeroHome />
      <div className="flex justify-center items-center  -mt-16 ">
        <SingleReview />
        <ConversionRate />
      </div>
      <ExpertHelp />
      <HelpBanner />
    </>
  );
}
