import logo from '../assets/investment-calculator-logo.png';
function Header() {
  return (
    <header>
      <img
        src={logo}
        alt="Money bag logo"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
export default Header;
