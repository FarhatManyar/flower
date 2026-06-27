import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
function About() {
  return (
    <div className="about">
      <Navbar active="about" />
      <BodyContainer>
      <h1>About Us</h1>
      </BodyContainer>
    <Footer/>
    </div>
  );
}

export default About;