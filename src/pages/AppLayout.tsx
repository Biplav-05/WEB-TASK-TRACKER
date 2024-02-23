import { Outlet } from "react-router";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default function AppLayout() {
  return (
    <div className="w-dvw">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
