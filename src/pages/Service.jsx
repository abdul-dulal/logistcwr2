import BreadCumb from "../components/Others/BreadCumb";

import serviceOne from "/src/assets/HomeOne/1-s-1.jpg";
import serviceTwo from "/src/assets/HomeOne/1-s-2.jpg";
import serviceThree from "/src/assets/HomeOne/1-s-3.jpg";
import serviceIconOne from "/src/assets/HomeOne/dallar-icon.png";
import serviceIconTwo from "/src/assets/HomeOne/ship-icon.png";
import serviceIconthree from "/src/assets/HomeOne/home-icon.png";
import shape from "/src/assets/HomeOne/air-plane.png";
import Testimonial from "../components/HomeOne/Testimonial";
import t1 from "/src/assets/HomeOne/1-1.png";
import t2 from "/src/assets/HomeOne/1-2.png";
import t3 from "/src/assets/HomeOne/1-3.png";
import ServiceOne from "../components/HomeOne/ServiceOne";
import VideoModal from "../components/HomeTwo/VideoModal";
import AppoinmentLeft from "../components/HomeOne/AppoinmentLeft";
import appionment from "/src/assets/HomeOne/appionment.jpg";
const Service = () => {
  return (
    <div>
      <BreadCumb title="Service" currentPage="Service" />
      {/* Service */}
      <section className="bg-[#f5f4f9] pt-[100px] pb-20">
        <div className="px-[15px]">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration="1s"
          >
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              Types of Loglstice
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Popular Logistics Services</h2>
          </div>
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 wow animate__fadeInUp"
            data-wow-duration=".9s"
          >
            <ServiceOne
              img={serviceOne}
              icon={serviceIconOne}
              title="Transport by Road"
            />
            <ServiceOne
              img={serviceTwo}
              icon={serviceIconTwo}
              title="Safety Garunteed"
            />
            <ServiceOne
              img={serviceThree}
              icon={serviceIconthree}
              title="Managing logistics for"
            />
          </div>
        </div>
      </section>

      {/* Appionment__Area */}

      <div className="relative bg-primary xl:pt-[100px] pt-10 overflow-hidden z-[1]">
        <div className="px-[15px]">
          <div className="grid grid-cols-12">
            <div className="lg:col-span-9 col-span-12">
              <AppoinmentLeft />
            </div>
            <div className="col-span-3"></div>
            <div className="">
              <div className="absolute top-[33px]  -z-[1] right-0 w-[50%] h-full overflow-hidden">
                <img
                  src={appionment}
                  className="bg-cover bg-no-repeat  h-full"
                  alt="Appionment"
                />
              </div>
              <div className="absolute right-[4%] bottom-[18%] xl:block hidden">
                <img src={shape} className="w-[71%] shape" alt="" />
              </div>
              <div className="absolute top-[22%] right-[11%] lg:block hidden">
                <VideoModal />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client__Area */}
      <section className="pt-[100px] pb-20">
        <div className="px-[15px]">
          <div
            className="text-center wow animate__fadeInUp"
            data-wow-duration=".8s"
          >
            <h5 className="capitalize relative  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
              What Our Clients
            </h5>
            <span className="relative inline-block after:absolute after:left-5 after:-top-5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:left-5 before:-top-4 before:w-4 before:h-4 before:bg-secondary before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle"></span>
            <h2 className="mb-11">Stories From Our Users</h2>
          </div>
          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 wow animate__fadeInUp"
            data-wow-duration=".8s"
          >
            <Testimonial img={t1} client="Sahinur Islam" />
            <Testimonial img={t2} client="Madriya Merin" />
            <Testimonial img={t3} client="Darrell Steward" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
