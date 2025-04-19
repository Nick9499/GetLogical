import dynamic from "next/dynamic";

const HeroHome = dynamic(() => import("./components/Hero"), { ssr: false });
const ExpertHelp = dynamic(() => import("./components/ExpertHelp"), {
  ssr: false,
});
const Services = dynamic(() => import("./components/Services"), { ssr: false });
const SeamLessIntegration = dynamic(
  () => import("./components/SeamlessIntegration"),
  { ssr: false }
);
const Reviews = dynamic(() => import("./components/Reviews"), { ssr: false });

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
