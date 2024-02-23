import { NavLink, useLocation } from "react-router-dom";

type navLinkProp = {
  to: string;
  text: string;
};
export function NavItem({ to, text }: navLinkProp) {
  const { pathname } = useLocation();
  const activeClassName =
    pathname === `/${to}` ? "text-blue-600" : "text-black hover:text-blue-600";
  return (
    <NavLink
      to={to}
      className={`${activeClassName}   mt-1 block px-2 py-1 font-semibold sm:mt-0 sm:ml-2`}
    >
      {text}
    </NavLink>
  );
}
