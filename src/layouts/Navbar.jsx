import { Link } from "react-router-dom";
import logo from "../assets/main-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Drawer from "../layouts/Drawer";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`    ${
        isSticky
          ? "fixed top-0 left-0 w-full z-[999] bg-[#d1e4ea] is-sticky"
          : ""
      }`}
    >
      <div className="relative xl:bg-[#d1e4ea] bg-secondary py-[25px]">
        <div className=" xl:before:absolute before:content-['']  before:top-0 before:right-0 before:bg-secondary before:w-[342px] before:h-[120px] before:z-[1]">
          <div className="relative before:absolute before:content-[' '] before:-top-[25px] before:-left-11 before:bg-secondary before:w-[25%] before:h-[120px] before:z-[1] before:-skew-x-[36deg] xl:after:absolute after:content-[''] after:-top-[25px] after:left-[20.5%] after:bg-[#d1e4ea] after:w-[3%] after:h-[93px] after:z-[1] after:skew-x-[30deg]">
            <div className="container ">
              <div className="xl:grid   grid-cols-12 flex justify-between   items-center">
                <div className="xl:col-span-2 col-span-6 ">
                  <div className="relative z-[99] ">
                    <img src={logo} className="w-[201px]" alt="Logo" />
                  </div>
                </div>
                <nav className="xl:col-span-10  xl:ml-[122px] xl:block hidden ">
                  <div className="flex justify-between items-center">
                    <ul className=" relative ">
                      <li className="relative text-secondary text-lg font-medium mr-9  pb-10 inline  ">
                        <Link
                          to="javascript:void(0)"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          Home <FontAwesomeIcon icon={faAngleDown} />
                        </Link>
                        <ul className="sub-menu bg-secondary rounded-sm w-[250px] z-[9] text-left py-4 mt-9 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/"
                            >
                              home one
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/homeTwo"
                            >
                              home two
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/homeThree"
                            >
                              home three
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/HomeFour"
                            >
                              home freight
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className=" text-secondary text-lg font-medium pb-10 mr-9 inline  ">
                        <Link
                          to="/About"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          About
                        </Link>
                      </li>
                      <li className=" relative text-secondary text-lg font-medium mr-9  pb-10 inline  ">
                        <Link
                          to="javascript:void(0)"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          Services <FontAwesomeIcon icon={faAngleDown} />
                        </Link>
                        <ul className="sub-menu  bg-secondary rounded-sm w-[250px] z-[9] text-left py-4 mt-9 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/Service"
                            >
                              Service
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/service-details"
                            >
                              Service details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="relative text-secondary text-lg font-medium mr-9  pb-10 inline  ">
                        <Link
                          to="javascript:void(0)"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          Pages <FontAwesomeIcon icon={faAngleDown} />
                        </Link>
                        <ul className="sub-menu bg-secondary rounded-sm w-[250px] z-[9] text-left py-4 mt-9 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/Team"
                            >
                              team
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/team-details"
                            >
                              team details
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/Project"
                            >
                              project
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/project-details"
                            >
                              project details
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-14 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/Faq"
                            >
                              FAQ
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/*"
                            >
                              404 page
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="relative text-secondary text-lg font-medium mr-9  pb-10 inline  ">
                        <Link
                          to="/BlogStandard"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          News <FontAwesomeIcon icon={faAngleDown} />
                        </Link>
                        <ul className="sub-menu  bg-secondary rounded-sm w-[250px] z-[9] text-left py-4 mt-9 px-5 block -left-[25px] m-auto absolute invisible opacity-0  transition-all duration-500 ease-out origin-top-left transform">
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/BlogStandard"
                            >
                              blog standard
                            </Link>
                          </li>
                          <li className="relative  inline-block mr-10 transition-all duration-500 ease-out before:absolute before:content-[''] before:bottom-1 before:right-0 before:bg-[#f68b21] before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0">
                            <Link
                              className="py-[9px]  m-0 text-white leading-[26px] capitalize font-normal text-lg  block relative transition-all duration-500 ease-out hover:text-[#f68b21] "
                              to="/blog-details"
                            >
                              blog details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className=" text-secondary text-lg font-medium pb-10  inline  ">
                        <Link
                          to="/contact"
                          className="relative before:absolute before:content-[''] before:-bottom-1 before:right-0 before:bg-secondary before:w-0 before:h-[1px] before:transition-all before:ease-out before:duration-500 before:hover:w-[100%] before:hover:left-0"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                    <div className="relative z-[1] -left-11 xl:flex  items-center gap-8  hidden">
                      <div>
                        <Link
                          to="#"
                          className=" inline-block w-[50px] h-[50px] leading-[50px]  bg-[#054c60] text-center text-white text-xl rounded-[50%] contact"
                        >
                          <FontAwesomeIcon icon={faPhone} className="" />
                        </Link>
                      </div>
                      <div className="text-white font-medium text-[15px] ">
                        <p className="mb-1">Emergency</p>
                        +56 (201) 555-0124
                      </div>
                    </div>
                  </div>
                </nav>
                <Drawer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
