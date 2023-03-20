import "../styles/style.css";
import logo from "../image/.eh.svg";
export default function Header() {
  return (
    <>
      <div className="logoWrapper">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </>
  );
}
