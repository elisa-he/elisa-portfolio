import { Link } from "react-router-dom";

export default function Header({ logo }) {
  return (
    <>
      <Link to={`/`} className="link">
        <div className="logoWrapper">
          <img src={logo} alt="logo" className="logo" />
        </div>
      </Link>
    </>
  );
}
