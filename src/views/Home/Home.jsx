import './Home.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from '../../components/BodyContainer/BodyContainer';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PRODUCTS } from "./../../config";
import PageTitle from '../../components/PageTitle/PageTitle';


function Home() {
  return (
    <div>
      <Navbar active="home" />

       <PageTitle title="Welcome to Our Flower Shop" subtitle={"Discover the beauty of fresh flowers"} /> 

      <BodyContainer>
        <div className="products-container">
          {PRODUCTS.map((product) => (
            <ProductCard product={product} key={product.id}  />
          ))}
        </div>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default Home;
