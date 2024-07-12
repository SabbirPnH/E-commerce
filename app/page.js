import Banner from "./components/Banner";
import BusinessCard from "./components/BusinessCard";
import CallNow from "./components/CallNow";
import Ecommerce from "./components/Ecommerce";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";


export default function Home() {
  return (
   <main>
    <Banner/>
    <HeroSection/>
    <BusinessCard/>
    <CallNow/>
   <Project/>
   <Ecommerce/>
   </main>
  );
}
