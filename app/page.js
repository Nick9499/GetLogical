import dynamic from "next/dynamic";

const HeroHome = dynamic(() => import("./components/Hero"));
const ExpertHelp = dynamic(() => import("./components/ExpertHelp"));
const Services = dynamic(() => import("./components/Services"));
const SeamLessIntegration = dynamic(() =>
  import("./components/SeamlessIntegration")
);
const Reviews = dynamic(() => import("./components/Reviews"));

export default function Home() {
  return (
    <div>
      <HeroHome />
      <ExpertHelp />
      <Services />
      <SeamLessIntegration />
      <Reviews />
    </div>
  );
}
