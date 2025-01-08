import { Link } from "react-router-dom";

const ServiceThree = ({ img, serviceTitle }) => {
  return (
    <div className="relative group">
      <img
        src={img}
        className="w-full duration-[.8s] rounded-[13px] mb-[24px]"
        alt="Service"
      />
      <div className="absolute bottom-0 left-[31px] opacity-0 duration-500 group-hover:opacity-100 group-hover:bottom-10">
        <h5 className="text-white capitalize">
          <Link to="/service-details">{serviceTitle}</Link>
        </h5>
      </div>
    </div>
  );
};

export default ServiceThree;
