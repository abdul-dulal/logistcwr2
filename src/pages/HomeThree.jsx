import {
  faArrowRight,
  faBagShopping,
  faEnvelopeOpen,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import roadService from "/src/assets/homeThree/bus.png";
import trainService from "/src/assets/homeThree/train.png";
import airService from "/src/assets/homeThree/air.png";
import shipService from "/src/assets/homeThree/ship.png";
import liftService from "/src/assets/homeThree/lift.png";
import port from "/src/assets/homeThree/a1.png";
import port2 from "/src/assets/homeThree/a2.png";
import port3 from "/src/assets/homeThree/a3.png";
import port4 from "/src/assets/homeThree/a5.png";
import port1 from "/src/assets/homeThree/a4.png";
import Project from "../components/HomeThree/Project";
import InputField from "../components/HomeOne/InputField";
import care from "/src/assets/homeThree/s1.png";
import Safe from "../components/HomeThree/Safe";
import box from "/src/assets/homeThree/s2.png";
import house from "/src/assets/homeThree/s3.png";
import world from "/src/assets/homeThree/s4.png";
import user from "/src/assets/homeThree/s5.png";
import process from "/src/assets/homeThree/process1.png";
import process2 from "/src/assets/homeThree/process2.png";
import process3 from "/src/assets/homeThree/process-3.png";
import process4 from "/src/assets/homeThree/process-4.png";
import WorkProcess from "../components/HomeThree/WorkProcess";
import TestimonialSlider from "../components/HomeThree/TestimonialSlider";
import Team from "../components/HomeTwo/Team";
import tm1 from "/src/assets/team/somaiya.png";
import tm2 from "/src/assets/team/dulal.png";
import tm3 from "/src/assets/team/monio.png";
import tm4 from "/src/assets/team/saad.png";
import blog1 from "/src/assets/HomeTwo/h2b1.jpg";
import blog2 from "/src/assets/HomeTwo/h2b2.jpg";
import blog3 from "/src/assets/HomeTwo/h2b3.jpg";
import BlogContent from "../components/HomeTwo/BlogContent";
import Subscribe from "../components/HomeThree/Subscribe";
import About from "../components/HomeThree/About";
import ServiceThree from "../components/HomeThree/ServiceThree";
const HomeThree = () => {
  return (
    <div>
      {/* Hero__Area */}
      <section className="py-[217px] bg-[url('/src/assets/homeThree/home3-bg.jpg')] bg-no-repeat">
        <div className="container">
          <div className="inline-block border-2 border-solid border-white py-[9px] sm:px-[55px] px-5   rounded-[25px]">
            <h4 className="sm:text-lg text-base font-medium text-white">
              Logistcwr Transportation Inc
            </h4>
          </div>
          <div>
            <h2 className="xl:text-[75px] md:text-[63px] sm:text-[52px] xl:leading-[90px] md:leading-[73px] text-[34px] sm:leading-[63px] leading-[43px] font-bold  mt-4 text-white">
              Modern Logistics <br />
              Transportation
            </h2>
            <p className="font-normal mt-4 text-white">
              Take your business to the next level with Loraic new business
              <br />
              management tools. Loraic will open a new horizon for us.
            </p>
          </div>
          <div className="flex flex-wrap gap-7 mt-[29px]">
            <Link
              to="/"
              className="py-[18px] pr-[39px] pl-[42px] bg-primary duration-500 font-medium text-base rounded-[5px] text-white capitalize hover:bg-secondary"
            >
              free quote
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 -rotate-[45deg]"
              />
            </Link>
            <div className="flex gap-4">
              <div className="bg-[#9f9f9f] text-white h-[60px] w-[60px] leading-[60px] inline-block text-center rounded-[50px] text-[27px]">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <p className="text-xl text-white font-medium">Call Us now </p>
                <a
                  href="tel:01643837728"
                  className="text-xl text-white font-medium block"
                >
                  01643837728
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About__Area */}
      <section className="relative py-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-[60px] items-center">
            <div>
              <img
                src="/src/assets/homeThree/3.png"
                className="w-full"
                alt="About"
              />
            </div>
            <div>
              <h6 className="">about companay</h6>
              <h3>
                We Are Proud Of Workforce <br />
                And Have Worked Hard.
              </h3>
              <p className="my-[14px] font-normal">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text <br />
                piece of classical Latin literature from 45 BC
              </p>
              <About />
              <Link
                to="/"
                className="pt-4 pr-10 pb-[18px] pl-[39px] capitalize text-white bg-secondary inline-block duration-500 rounded-[5px] mt-11 hover:bg-primary"
              >
                read more
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 -rotate-[45deg]"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service__Area */}

      <section className="relative pt-[95px] pb-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-2">
            <div>
              <h6 className="sm:text-xl text-[17px] capitalize font-bold text-primary relative inline-block ml-[120px] before:absolute before:content-[''] before:top-[11px] before:-left-[119px] before:bg-primary before:w-[105px]  before:h-1">
                Our Services
              </h6>
              <h3>
                Services We ‘ re Providing <br />
                To Our Customers
              </h3>
            </div>
            <div>
              <p className="lg:text-right leading-[26px] font-medium lg:my-0 my-5">
                There are many variations of passages of Lorem Ipsum <br />
                available, but the majority have readable content suffered
                <br />
                alteration in some
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 mt-[21px] gap-6">
            <ServiceThree img={roadService} serviceTitle="road freight" />
            <div className="grid lg:grid-cols-2 gap-6">
              <div>
                <ServiceThree img={trainService} serviceTitle="train freight" />
                <ServiceThree img={airService} serviceTitle="sea freight" />
              </div>
              <div>
                <ServiceThree img={shipService} serviceTitle="air freight" />
                <ServiceThree img={liftService} serviceTitle="other freight" />
              </div>
            </div>
          </div>
          <div className="block text-center">
            <Link
              to="#"
              className=" pt-4 pr-10 pb-[18px] pl-[39px] capitalize text-white bg-secondary inline-block duration-500 rounded-[5px] mt-11 hover:bg-primary "
            >
              explore more
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 -rotate-[45deg]"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Project__Area */}

      <section className="pt-[70px] pb-[100px]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <div>
              <div className="">
                <h6 className="sm:text-xl text-[17px] capitalize font-bold text-primary relative inline-block ml-[120px] before:absolute before:content-[''] before:top-[11px] before:-left-[119px] before:bg-primary before:w-[105px]  before:h-1">
                  Our Services
                </h6>
                <h3>
                  The Achievement <br />
                  Of Our Project
                </h3>
                <Link
                  to="#"
                  className=" pt-4 pr-10 pb-[18px] pl-[39px] capitalize text-white bg-secondary inline-block duration-500 rounded-[5px] mt-11 hover:bg-primary "
                >
                  explore more
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 -rotate-[45deg]"
                  />
                </Link>
              </div>
            </div>
            <div>
              <Project port={port} title="Professional packing" />
            </div>
            <div>
              <Project port={port2} title="Same-day shipment" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 items-center">
            <Project port={port3} title=" Efficient loading" />
            <Project port={port1} title="Warehouse Inventory" />
            <Project port={port4} title="Tracking information" />
          </div>
        </div>
      </section>

      {/* Chose__Area */}
      <section className="relative bg-[url('/src/assets/homeThree/bg.png')] rounded-[30px] bg-no-repeat bg-cover bg-center max-w-[1800px] w-[91%] mx-auto   pt-[100px] pb-[100px] ">
        <div className=" sm:px-10 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h3
              className="sm:text-[38px] text-[27px] text-white mb-[50px] inline-block wow animate__fadeInUp"
              data-wow-duration=".6s"
            >
              Book Transport & Logistics
            </h3>
            <form>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                  <InputField icon={faUser} plc="full name *" type="text" />
                </div>
                <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                  <InputField
                    icon={faEnvelopeOpen}
                    plc="email here *"
                    type="email"
                  />
                </div>

                <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                  <InputField
                    icon={faBagShopping}
                    plc="weight. kg *"
                    type="email"
                  />
                </div>

                <div className="wow animate__fadeInUp" data-wow-duration=".6s">
                  <InputField
                    icon={faLocationDot}
                    plc="distance. km *"
                    type="email"
                  />
                </div>
              </div>
              <div className="mt-5 ">
                <div className="mt-5 relative">
                  <select
                    className="appearance-none w-full h-16 px-8 rounded-[5px] border-none outline-none focus:outline-0 placeholder:text-base placeholder:capitalize placeholder:text-[#929fa2] placeholder:font-normal wow animate__fadeInUp"
                    data-wow-duration=".6s"
                  >
                    <option value="1">Select Freight</option>
                    <option value="2">Air Freight </option>
                    <option value="3">Sea Freight</option>
                    <option value="4">Road Freight</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className=" pt-4 pr-10 pb-[18px] pl-[39px] capitalize text-white bg-secondary inline-block duration-500 rounded-[5px] mt-11 hover:bg-primary "
              >
                explore more
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2 -rotate-[45deg]"
                />
              </button>
            </form>
          </div>
          <div className="absolute xl:block hidden right-[95px] bottom-[34px] shape">
            <img src="/src/assets/homeThree/air-plane3.png" alt="" />
          </div>
        </div>
      </section>

      {/* Trusted__Area */}

      <section className="py-[87px]">
        <div className="container">
          <div className=" text-center">
            <h6 className="sm:text-xl text-[17px] capitalize font-bold text-primary relative inline-block ml-[120px] before:absolute before:content-[''] before:top-[11px] before:-left-[119px] before:bg-primary before:w-[105px]  before:h-1">
              Trusted Transport Service
            </h6>
            <h3 className="pb-[52px] ">
              We Provide Quick & Safe <br className="sm:block hidden" />
              Transportation All Over The World
            </h3>
          </div>
          <div className="flex flex-wrap justify-center">
            <Safe img={care} title="Logistics System Complete" />
            <Safe img={box} title="Shipping All Over the world" />
            <Safe img={house} title="Online Product Tracking" />
            <Safe img={world} title="International shipping services" />
            <Safe img={user} title="Great logistical support" />
          </div>
          <div className="block text-center">
            <span className="inline-block sm:text-xl text-[17px] capitalize text-secondary font-medium text-center mt-10">
              Bring them together and you overcome the ordinary-
              <Link to="/" className="text-primary ml-1">
                View More Features
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* Work__Process__Area */}

      <div className="relative pt-[100px] pb-[90px] bg-[url('/src/assets/homeThree/work-bg.png')]">
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:gap-6">
            <WorkProcess img={process} serial="01" title="Select Services" />
            <WorkProcess
              img={process2}
              serial="02"
              title="parcel information"
            />
            <WorkProcess img={process3} serial="03" title="transportation" />
            <WorkProcess img={process4} serial="04" title="take our products" />
          </div>
        </div>
      </div>

      {/* Testimonial__Area */}

      <section className="py-[100px]">
        <div className="container">
          <div>
            <h6 className="sm:text-xl text-[17px] capitalize font-bold text-primary relative inline-block ml-[120px] before:absolute before:content-[''] before:top-[11px] before:-left-[119px] before:bg-primary before:w-[105px]  before:h-1">
              Testimonial
            </h6>
            <h3>Customer Insights</h3>
          </div>
          <div className="">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* Team__Area */}

      <section className="bg-[#ebebeb] py-[100px]">
        <div className="container">
          <div className="block text-center">
            <h6>Our Most Team</h6>
            <h3 className="mb-11">Meet The Excecutive Panel</h3>
          </div>
          <div
            className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 wow animate__fadeInUp"
            data-wow-duration=".8s"
          >
            <Team img={tm1} name="Somaiya Akter" />
            <Team img={tm2} name="Abdul Dulal" />
            <Team img={tm3} name="Monio Roman" />
            <Team img={tm4} name="Saad Alam" />
          </div>
        </div>
      </section>

      {/* Blog__Area */}

      <section className="py-[100px]">
        <div
          className="mb-[50px] text-center wow animate__fadeInUp"
          data-wow-duration="1s"
        >
          <h6 className="capitalize">Our News from Blog</h6>
          <h3 className="mb-11">The latest News & Best Blog</h3>
        </div>
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            <BlogContent
              blog={blog1}
              bTitle="New Additions to our great Metro trucks."
            />
            <BlogContent
              blog={blog2}
              bTitle="Express delivery is going to slow down in 2024."
            />
            <BlogContent
              blog={blog3}
              bTitle="Varying complexity, provide long-term guarantees"
            />
          </div>
        </div>
      </section>

      {/* Subscribe__Area */}
      <Subscribe />
    </div>
  );
};

export default HomeThree;
