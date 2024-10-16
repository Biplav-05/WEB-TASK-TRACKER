import { explore } from "../components/shared/Icons";

const Home = () => {
  return (
    <div className="flex flex-col py-16 md:px-80 px-10 items-center text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold md:leading-relaxed leading-normal bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700 inline-block text-transparent  bg-clip-text">
        One app to replace them all
      </h1>
      <p className="my-5  md:text-3xl text-2xl font-medium">
        <span className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, exercitationem omnis officia porro, sit reiciendis a natus inventore unde veritatis ducimus! Deserunt dolores commodi porro officia totam quis exercitationem illum.{" "}
        </span>
        designed to manage any type of work
      </p>
      <button className="hover:translate-y-2 my-5 text-xl text-white font-bold px-5 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700">
        Get started. It's FREE {explore}
      </button>
    </div>
  );
};

export default Home;
