import "./Navbar.css";
import { Link } from "react-router";
export default function Navbar() {
  return (
   
   
   <div>
    <Link to="/">Home</Link> &nbsp;| &nbsp;
    <Link to="/about">About</Link> &nbsp;| &nbsp;
    <Link to="/contact">Contact</Link> &nbsp; |&nbsp;
    <Link to="/our-service">Our Service</Link>
   </div>
  )
}
