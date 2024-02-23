import { fbIcon, instaIcon, linkdinIcon } from "../components/shared/Icons";
import Logo from "../components/shared/Logo";

const Footer = () => {
  return (
    <section className="py-5 px-5 flex flex-col md:flex-row align-middle items-center bg-gradient-to-r from-blue-500 to-purple-600 h-auto w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-2 ">
          <Logo logoTitle="Task Tracker" className="text-white" />
        </div>
        <div className="my-3">
          <ul className="flex flex-row gap-2 text-white text-base">
            <li className="border-e-2 pe-1 md:pe-2 rounded">
              @2024 Task Tracker
            </li>
            <li className="border-e-2 pe-1 md:pe-2 rounded">Security</li>
            <li className="border-e-2 pe-1 md:pe-2 rounded">Your Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="md:absolute md:right-10  pt-2 pb-2">
        <ul className="flex flex-row gap-4">
          <li>{fbIcon}</li>
          <li>{linkdinIcon}</li>
          <li>{instaIcon}</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
