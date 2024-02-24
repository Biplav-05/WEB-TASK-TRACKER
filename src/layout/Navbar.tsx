import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/shared/Button";
import Logo from "../components/shared/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import { NavItem } from "../components/shared/NavItem";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const cn = isOpen ? "block" : "hidden";
  const navigate = useNavigate();

  const barIcon = <FontAwesomeIcon icon={faBars} size="lg" />;
  const cancelIcon = <FontAwesomeIcon icon={faXmark} size="lg" />;
  const handleSignup = () => {
    navigate("/register");
  };
  const handleLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-white border-gray-200 dark:bg-gray-900 sticky top-0 ${
          hasScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3">
            <Logo logoTitle="Task Tracker" />
          </NavLink>
          <div className="flex md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
            <Button
              text="Sign Up"
              className="hidden md:block"
              onClick={handleSignup}
            />
            <Button text="Log in" onClick={handleLogin} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              {isOpen ? cancelIcon : barIcon}
            </button>
          </div>
          <div
            className={`${cn} items-start justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="md:text-base flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavItem text="Product" to="product" />
              <NavItem text="Solution" to="solution" />
              <NavItem text="Learn" to="learn" />
              <NavItem text="Pricing" to="pricing" />
              <NavItem text="Enterprise" to="enterprise" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
