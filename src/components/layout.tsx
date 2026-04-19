import { Outlet } from "react-router";
import Navbar from "./navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;