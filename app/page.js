import Banner from "./components/Banner";
import BusinessCard from "./components/BusinessCard";
import CallNow from "./components/CallNow";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";


export default function Home() {
  return (
   <main>
    <Banner/>
    <HeroSection/>
    <BusinessCard/>
    <CallNow/>
    <Gallery/>
   </main>
  );
}
