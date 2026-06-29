import "./Navbar.css";
import { Link } from "react-router";
import { House,FileUser,PhoneCall,HeartHandshake } from "lucide-react";

const NavConfig = [
  {
    name: "home",
    icon: <House className="menu-icon" />,
    title: "Home",
    path: "/"
  },
  {
    name: "about",
    icon: <FileUser className="menu-icon" />,
    title: "About",
    path: "/about"
  },
  {
    name: "contact",
    icon: <PhoneCall className="menu-icon" />,
    title: "Contact",
    path: "/contact"
  },
  {
    name: "our-service",
    icon: <HeartHandshake className="menu-icon" />,
    title: "Our Services",
    path: "/our-service"
  }
];

function Navbar({active}) {
  return (
    <div className="navbar">
      {NavConfig.map((menuItem) => (
        <Link
          key={menuItem.name}
          to={menuItem.path}
          className={`menu-item ${active === menuItem.name ? "active-menu" : ""}`}
        >
          {menuItem.icon}
          {menuItem.title}
        </Link>
      ))}
    </div>
  );
}
export default Navbar;
