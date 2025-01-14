import BreadCumb from "../components/Others/BreadCumb";
import notfound from "/src/assets/not-found.png";
const NotFound = () => {
  return (
    <div>
      <BreadCumb title="404" currentPage="404" />
      <section className="py-[100px]">
        <div className="grid lg:grid-cols-12">
          <div className="col-span-2"></div>
          <div className="lg:col-span-8 col-span-12">
            <img src={notfound} alt="Not Found" />
          </div>
          <div className="col-span-2"></div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
