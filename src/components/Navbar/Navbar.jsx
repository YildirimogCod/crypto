import React, { useContext } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";

const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  { name: "Features", link: "/" },
  { name: "Pricing", link: "/" },
  { name: "Blog", link: "/" },
];
const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const handleCurrency = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };
  return (
    <nav className="navbar">
      {/* logo */}
      <img src={logo} alt="logo" className="logo" />
      {/* links */}
      <ul className="navbar-center">
        {navLinks.map((item, i) => {
          return (
            <li key={i} to={item.link}>
              {item.name}
            </li>
          );
        })}
      </ul>

      {/* register and currency */}
      <div className="navbar-end">
        <select onChange={handleCurrency}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
        <button>
          Sign Up <img src={arrow} alt="arrow" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
