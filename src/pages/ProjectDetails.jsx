import AccrodianTwo from "../components/HomeTwo/AccrodianTwo";
import BreadCumb from "../components/Others/BreadCumb";
import ps1 from "/src/assets/service-details/ps1.jpg";
import ps2 from "/src/assets/service-details/ps2.jpg";
const ProjectDetails = () => {
  return (
    <div>
      <BreadCumb title="Project Details" currentPage="Project Details" />
      <section className="py-[100px]">
        <div className="px-[15px]">
          <img src={ps2} className="w-full" alt="Project Details" />
          <h3 className="text-[30px] font-semibold mt-[57px] ">
            Project Details
          </h3>
          <p className="mt-8">
            To be clear, Project Online is NOT a web-based version of Project
            Professional. Project Online is an entirely separate service that
            offers full portfolio and project management <br />
            tools on the web. It includes Project Web App, and can, depending on
            your subscription, also include Project Online Desktop Client, which
            is a <br /> Discover Community. Explore subscription benefits,
            browse training courses, learn how to secure
          </p>
          <p className="mt-6">
            To be clear, Project Online is NOT a web-based version of Project
            Professional. Project Online is an entirely separate service that
            offers full portfolio and project management <br /> tools on the
            web. It includes Project Web App, and can, depending on your
            subscription, also include Project Online
          </p>
          <div className="grid lg:grid-cols-2 my-14 gap-12">
            <div>
              <img src={ps1} className="w-full" alt="About" />
            </div>
            <div>
              <AccrodianTwo />
            </div>
          </div>
          <p className="">
            To be clear, Project Online is NOT a web-based version of Project
            Professional. Project Online is an entirely separate service that
            offers full portfolio and project management <br /> tools on the
            web. It includes Project Web App, and can, depending on your
            subscription, also include Project Online Desktop Client, which is a{" "}
            <br />
            Discover Community. Explore subscription benefits, browse training
            courses, learn how to secure
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
