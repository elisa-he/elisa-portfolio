import "../styles/style.css";

export default function Header({ logo }) {
  return (
    <>
      <div className="logoWrapper">
        <img src={logo} alt="logo" className="logo" />
      </div>
    </>
  );
}
