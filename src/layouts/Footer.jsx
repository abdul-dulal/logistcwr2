import { Link } from "react-router-dom";
import FooterSocial from "../components/Footer/FooterSocial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import footerLogo from "/src/assets/HomeOne/logo.png";
const Footer = () => {
  return (
    <footer className="pt-[120px] pb-8 overflow-hidden bg-[url('/src/assets/HomeOne/footer-bg.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="container">
        <div className="border-b border-dashed border-primary pb-[121px]">
          <div
            className="grid lg:grid-cols-4 md:grid-cols-2 wow animate__fadeInUp"
            data-wow-duration="1.2s"
          >
            <div>
              <Link to="/">
                <img src={footerLogo} alt="Logo" />
              </Link>
              <p className="text-white w-[80%] mt-6">
                Feugiat a ligula rutrum luctus primis ultrice nteger congue
                magna at pretium purus a pretium ligula rutrum and luctus
              </p>
              <FooterSocial />
            </div>
            <div>
              <h5 className="relative text-white mb-[43px] lg:mt-0 mt-6 before:absolute before:content-[''] before:-bottom-[17px] before:left-0 before:bg-primary before:w-[100px] before:h-[1px]">
                Our Navigation
              </h5>
              <div>
                <div>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    Airplane Fright
                  </Link>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    About Portx
                  </Link>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    meet the team
                  </Link>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    News & Med
                  </Link>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    our project
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h5 className="relative text-white mb-[43px] lg:mt-0 mt-6 before:absolute before:content-[''] before:-bottom-[17px] before:left-0 before:bg-primary before:w-[100px] before:h-[1px]">
                Our Service
              </h5>
              <div>
                <div>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    Reliability & Punctuality
                  </Link>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    Trusted Franchise
                  </Link>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    Warehoues Storage
                  </Link>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    Real Time Tracking
                  </Link>
                  <Link
                    to="/#"
                    className="block mb-[17px] text-base capitalize text-white duration-500 hover:text-primary"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className="mr-[7px] text-primary"
                    />
                    Transparent Pricing
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h5 className=" relative text-white mb-[43px] lg:mt-0 mt-6 before:absolute before:content-[''] before:-bottom-[17px] before:left-0 before:bg-primary before:w-[100px] before:h-[1px]">
                Newsletter
              </h5>

              <p className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
              <div className="mt-[45px] relative">
                <form>
                  <input
                    type="email"
                    className="relative text-base text-[939393] font-normal w-[89%] py-[18px] px-[17px]"
                  />
                  <button
                    type="submit"
                    className="bg-primary py-3 px-[19px] absolute top-[6px] md:right-[14%] right-[13%]"
                  >
                    <FontAwesomeIcon
                      icon={faAnglesRight}
                      className=" text-white"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center wow animate__fadeInUp"
        data-wow-duration="1.2s"
      >
        <span className=" text-white inline-block mt-8">
          &copy; Copyrights 2024
          <Link
            to="/"
            className="text-primary underline inline-block ml-1 mr-1"
          >
            sTheme-IT
          </Link>
          All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
