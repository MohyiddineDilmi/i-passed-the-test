import ReactLogo from "../assets/canada_symbol.svg"; // Import the image
function Header() {
  return (
    <header className="app-header">
      <img src={ReactLogo} alt="Reactlogo" />
      <h1>Canada citizenship test</h1>
    </header>
  );
}

export default Header;
