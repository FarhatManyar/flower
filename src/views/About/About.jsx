import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from '../../components/PageTitle/PageTitle';

function About() {
  return (
    <div className="about">
      <Navbar active="about" />
      <PageTitle title="Learn more about us" subtitle={"Discover the story behind our flower shop"} /> 

      <BodyContainer>
      
      </BodyContainer>
    <Footer/>
    </div>
  );
}

export default About;