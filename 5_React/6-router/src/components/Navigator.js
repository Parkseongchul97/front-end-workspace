import { Link } from "react-router-dom";
const Navigator = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/create"}>Create</Link>
        </li>
        <li>
          <Link to={"/detail/7"}>Detail</Link>
        </li>
      </ul>
    </>
  );
};
export default Navigator;
