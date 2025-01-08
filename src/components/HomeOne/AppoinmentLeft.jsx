import {
  faArrowRight,
  faBagShopping,
  faEnvelopeOpen,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import InputField from "./InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AppoinmentLeft = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-secondary pt-[81px] 2xl:px-[100px] px-10 pb-[80px]">
      <div className="wow animate__fadeInUp" data-wow-duration=".6s">
        <h5 className="relative ml-9 text-white capitalize  mb-5 inline-block after:absolute after:-left-9 after:top-1.5 after:w-4 after:h-4 after:bg-primary after:rotate-[45deg] after:transition-all after:duration-700 after:ease-out before:absolute before:content-[''] before:-left-8 before:top-1.5 before:w-4 before:h-4 before:bg-white before:rotate-[45deg] before:transition-all before:duration-700 before:ease-out before:z-[1] circle">
          Booking Appointment
        </h5>
        <h2 className="mb-11 text-white text-left">
          Book Transport & Logistics
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="wow animate__fadeInUp" data-wow-duration=".6s">
            <InputField icon={faUser} plc="full name *" type="text" />
          </div>
          <div className="wow animate__fadeInUp" data-wow-duration=".6s">
            <InputField icon={faEnvelopeOpen} plc="email here *" type="email" />
          </div>

          <div className="wow animate__fadeInUp" data-wow-duration=".6s">
            <InputField icon={faBagShopping} plc="weight. kg *" type="email" />
          </div>

          <div className="wow animate__fadeInUp" data-wow-duration=".6s">
            <InputField
              icon={faLocationDot}
              plc="distance. km *"
              type="email"
            />
          </div>
        </div>
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
        <button
          type="submit"
          className={`group mt-10 relative inline-block wow animate__fadeInUp bg-primary text-lg capitalize text-white py-[18px] px-[27px] overflow-hidden transition-all duration-500 z-[1] hover:text-secondary before:absolute before:content-[''] before:top-0 before:-left-3 before:w-[30px] before:h-full before:bg-white before:skew-x-[22deg] before:transition-all before:duration-500 before:-z-[1] before:hover:w-[95%] `}
          data-wow-duration=".6s"
        >
          request quote
          <FontAwesomeIcon
            className="icon ml-4 -rotate-[49deg]  text-[22px] text-white group-hover:text-secondary"
            icon={faArrowRight}
          />
        </button>
      </form>
    </div>
  );
};

export default AppoinmentLeft;
