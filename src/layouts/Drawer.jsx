import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import List from "../components/Others/List";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faPinterest,
  faVimeoV,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [home, setHome] = useState(true);
  const [service, setService] = useState(true);
  const [page, setPage] = useState(true);
  const [blog, setBlog] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="w-[30px] h-[20px] flex  flex-col justify-between overflow-hidden"
        onClick={toggleDrawer}
      >
        <span className="w-[80px] h-[2px] bg-primary"></span>
        <span className="w-[80px] h-[2px] bg-primary"></span>
        <span className="w-[80px] h-[2px] bg-primary"></span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[500px] bg-secondary border-l border-solid border-primary text-white transform z-[10000] overflow-y-scroll overflow-x-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          <div className="px-[35px] pt-10 pb-2 flex-shrink-0">
            <div className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5 mb-[35px]">
              <img
                src="/src/assets/main-logo.png"
                className="w-[160px]"
                alt="Logo"
              />
              <button className="text-3xl" onClick={toggleDrawer}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>

          <div className=" px-[35px] pb-5">
            <header>
              <ul className="relative">
                <li className="relative  ">
                  <Link
                    to="javascript:void(0)"
                    className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5"
                  >
                    Home
                    <span
                      onClick={() => setHome(!home)}
                      className={`text-center h-[35px] w-[35px] border border-solid border-[rgba(255,255,255,0.079)] rounded-[3px] font-normal text-2xl duration-500 ${
                        home ? "" : "bg-primary text-white"
                      }`}
                    >
                      {home ? "+" : "-"}
                    </span>
                  </Link>
                  <ul
                    className={`transition-all duration-500 bg-secondary  ease-in-out overflow-hidden px-3   ${
                      home ? "max-h-0" : "max-h-40"
                    } `}
                  >
                    <List title="home one" path="/" />
                    <List title="home two" path="/hometwo" />
                    <List title="home three" path="/homethree" />
                    <List title="home freight" path="/homethree" />
                  </ul>
                </li>
                <li className="mt-3 border-b border-solid border-[rgba(255,255,255,0.079)] pb-5">
                  <Link to="/about">About</Link>
                </li>
                <li className="relative  mt-3">
                  <Link
                    to="javascript:void(0)"
                    className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5"
                  >
                    Service
                    <span
                      onClick={() => setService(!service)}
                      className={`text-center h-[35px] w-[35px] border border-solid border-[rgba(255,255,255,0.079)] rounded-[3px] font-normal text-2xl duration-500 ${
                        service ? "" : "bg-primary text-white"
                      }`}
                    >
                      {service ? "+" : "-"}
                    </span>
                  </Link>
                  <ul
                    className={`transition-all duration-500 bg-secondary  ease-in-out overflow-hidden px-3   ${
                      service ? "max-h-0" : "max-h-40"
                    } `}
                  >
                    <List title="service" path="/service" />
                    <List title="service details" path="/service-details" />
                  </ul>
                </li>
                <li className="relative  mt-3">
                  <Link
                    to="javascript:void(0)"
                    className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5"
                  >
                    Pages
                    <span
                      onClick={() => setPage(!page)}
                      className={`text-center h-[35px] w-[35px] border border-solid border-[rgba(255,255,255,0.079)] rounded-[3px] font-normal text-2xl duration-500 ${
                        page ? "" : "bg-primary text-white"
                      }`}
                    >
                      {page ? "+" : "-"}
                    </span>
                  </Link>
                  <ul
                    className={`transition-all duration-500 bg-secondary  ease-in-out overflow-hidden px-3   ${
                      page ? "max-h-0" : "max-h-40"
                    } `}
                  >
                    <List title="team" path="/team" />
                    <List title="team details" path="/team-details" />
                    <List title="project" path="/project" />
                    <List title="project details" path="/project-details" />
                    <List title="faq" path="/faq" />
                    <List title="404 page" path="/*" />
                  </ul>
                </li>
                <li className="relative  mt-3">
                  <Link
                    to="javascript:void(0)"
                    className="flex justify-between items-center border-b border-solid border-[rgba(255,255,255,0.079)] pb-5"
                  >
                    News
                    <span
                      onClick={() => setBlog(!blog)}
                      className={`text-center h-[35px] w-[35px] border border-solid border-[rgba(255,255,255,0.079)] rounded-[3px] font-normal text-2xl duration-500 ${
                        blog ? "" : "bg-primary text-white"
                      }`}
                    >
                      {blog ? "+" : "-"}
                    </span>
                  </Link>
                  <ul
                    className={`transition-all duration-500 bg-secondary  ease-in-out overflow-hidden px-3   ${
                      blog ? "max-h-0" : "max-h-40"
                    } `}
                  >
                    <List title=" blog standard" path="/blogStandard" />
                    <List title="blog details" path="/blog-details" />
                  </ul>
                </li>
                <li className="mt-3 border-b border-solid border-[rgba(255,255,255,0.079)] pb-5">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </header>
            <div className="mt-10">
              <span className="text-xl text-white font-bold">
                Subscribe & Follow
              </span>
              <ul className="my-5 flex gap-3">
                <li className="h-9 w-9 bg-white rounded-full flex items-center justify-center">
                  <Link to="https://www.facebook.com/" className="text-primary">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li className="h-9 w-9 bg-white rounded-full flex items-center justify-center">
                  <Link
                    to="https://x.com/i/flow/login?mx=2"
                    className="text-primary"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                </li>
                <li className="h-9 w-9 bg-white rounded-full flex items-center justify-center">
                  <Link
                    to="https://www.pinterest.com/"
                    className="text-primary"
                  >
                    <FontAwesomeIcon icon={faPinterest} />
                  </Link>
                </li>
                <li className="h-9 w-9 bg-white rounded-full flex items-center justify-center">
                  <Link to="https://www.vimo.com/" className="text-primary">
                    <FontAwesomeIcon icon={faVimeoV} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9999]"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Drawer;
