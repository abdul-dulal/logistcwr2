import { Link } from "react-router-dom";

const List = ({ title, path }) => {
  console.log(path);
  return (
    <div>
      <Link
        to={path}
        className={`capitalize text-[16px] leading-[50px] font-normal text-white  border-b  border-solid border-[rgba(255,255,255,0.079)]  flex items-center justify-between`}
      >
        {title}
      </Link>
    </div>
  );
};

export default List;
