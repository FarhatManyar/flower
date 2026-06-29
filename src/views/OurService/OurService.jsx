import "./OurService.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from '../../components/PageTitle/PageTitle';
import { OUR_SERVICES } from "./../../config";
function OurService() {
  return (
    
    <div>
      <Navbar active="our-service" />
<PageTitle title="Our Service" subtitle={"Learn more about the services we offer"} /> 

      <BodyContainer>
        <div className="services-container">
        {OUR_SERVICES.map((serviceDetail,index) => {
          return (
            <div key={index} className="service-card">
              {serviceDetail.icon}
              <h2 className="service-card-title">{serviceDetail.title}</h2>
              <p className="service-card-description">{serviceDetail.description}</p>
              
            </div>
          );
        })}
        </div>
      </BodyContainer>
      
    <Footer/>
    </div> 
      
  )
}
export default OurService;