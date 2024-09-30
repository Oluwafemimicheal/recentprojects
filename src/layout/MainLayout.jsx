import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import RightNavbar from "../components/RightNavbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <RightNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
