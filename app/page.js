import Banner from "./components/Banner";
import BusinessCard from "./components/BusinessCard";
import CallAction from "./components/CallAction";
import CallNow from "./components/CallNow";
import Developing from "./components/Technologies";

import Ecommerce from "./components/Ecommerce";
import HeroSection from "./components/HeroSection";
import Project from "./components/Project";
import Technologies from "./components/Technologies";


export default function Home() {
  return (
   <main>
    <Banner/>
    <HeroSection/>
    <BusinessCard/>
    <CallNow/>
   <Project/>
   <Ecommerce/>
   <CallAction/>
   <Technologies/>
   </main>
  );
}
