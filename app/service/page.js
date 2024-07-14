import EcommercePackage from "../components/EcommercePackage";
import Features from "../components/Features";
import ServiceContent from "../components/ServiceContent";
import ServiceWork from "../components/ServiceWork";
import ServiceWorkIt from "../components/ServiceWorkIt";

const ServicePage = () => {
  return (
    <div>
      <div className="relative px-4  sm:px-20 py-10 sm:py-16 lg:py-28  bg-custom  bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="relative z-10">
          <h2 className="text-[26px] sm:text-32px] text-[#E9FF97]">Services</h2>
          <p className="text-white py-2 lg:w-1/2">
            PnH Corporation is a reputable software company with years of rich
            experience developing web design development and software for their
            customers on demand.
          </p>
        </div>
      </div>
      <ServiceContent />
      <ServiceWork />
      <ServiceWorkIt />
      <EcommercePackage/>
      <Features/>
    </div>
  );
};
export default ServicePage;
