import Navigator from "./Navigator";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navigator />
      <Outlet />
    </>
  );
};
export default Layout;
