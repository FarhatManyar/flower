
import img1 from "./assets/flower1.png";
import img2 from "./assets/flower2.png";
import img3 from "./assets/flower3.png";
import img4 from "./assets/flower4.png";
import img5 from "./assets/flower5.png";
import img6 from "./assets/flower6.png"; 
import img7 from "./assets/flower7.png";
import img8 from "./assets/flower8.png";
import { Truck, UserRoundPen, PartyPopper, Gift, Wand, Rose, Sparkles, Clock, Flower2, CalendarDays } from "lucide-react";




const PRODUCTS=[
  {
    id: 1,
    title: "Rose",
    price: "30",
    description: "A classic symbol of love and beauty, roses are available in a variety of colors and sizes.",
    image: img1
         
  },

  {
    id: 2,
    title: "Lily Bouquet",
    price: "90",
    description: "Lilies are elegant flowers that come in various colors and are often associated with purity and renewal.",
    image: img2
  },

{
 id: 3,
 title: "Tulip",
 price: "70",
 description: "Tulips are known for their vibrant colors and elegant shape, making them a popular choice for springtime bouquets.",
 image: img3

},

{
  id: 4,  
  title: "Daisy",
  price: "40",
  description: "Daisies are cheerful flowers with a simple beauty, often symbolizing innocence and purity.",
  image: img4 

},
{
  id: 5,  
  title: "Orchid",
  price: "50",
  description: "Orchids are exotic and elegant flowers known for their unique shapes and long-lasting blooms.",
  image: img5

},
{
  id: 6,
  title:"red flowers",
  price: "60",
  description: "Red flowers are a classic choice for expressing love and passion.",
  image: img6 
},
{
  id: 7,
  title: "Rose Bouquet",
  price: "80",
  description: "A beautiful arrangement of fresh roses, perfect for expressing love and affection.",
  image: img7
},
{
  id: 8,
  title:"Purple tulip bouquet",
  price: "90",
  description: "A stunning bouquet of purple tulips, symbolizing elegance and grace.",
  image: img8
}

];

const OUR_SERVICES = [
  {
    id: 1,    
    title: "Flower Delivery",
    description: "We offer reliable and timely flower delivery services to ensure your loved ones receive their blooms on time.",
    icon:<Truck height={"70px"}  width={"70px"}/>,
  },

  {
    id: 2,
    title: "Custom Arrangements",
    description: "Our skilled florists can create custom flower arrangements tailored to your preferences and occasions.",
    icon:<UserRoundPen height={"70px"}  width={"70px"}/>,
  },
  {
    id: 3,  
  title: "Event Decoration",
  description: "We provide professional event decoration services, transforming venues with beautiful floral designs.",
  icon:<PartyPopper height={"70px"}  width={"70px"}/>,
  },
{
  id: 4,
  title: "Gift Wrapping",
  description: "We offer elegant gift wrapping services to make your flower gifts even more special and memorable.",
  icon:<Gift height={"70px"}  width={"70px"}/>,
},
{
 id: 5,
  title: "Custom Design",
  description: "We offer custom floral design services to create unique arrangements that reflect your personal style and preferences.",
  icon:<Wand height={"70px"}  width={"70px"}/> 
},
{
  id: 6,
  title:"Floral Consultation",
  description: "Our experienced florists provide personalized floral consultations to help you choose the perfect flowers for any occasion.",
  icon:<Rose height={"70px"}  width={"70px"}/>
},
{
  id: 7,
  title: "Floral Care Advice",
  description: "Get expert care tips and aftercare instructions to keep your flowers fresh and beautiful for longer.",
  icon:<Sparkles height={"70px"} width={"70px"} />
},
{
  id: 8,
  title: "Same-Day Pickup",
  description: "Order by midday and pick up your fresh flowers the same day from our store.",
  icon:<Clock height={"70px"} width={"70px"} />
},
{
  id: 9,
  title: "Seasonal Bouquets",
  description: "Choose from our rotating selection of seasonal bouquets, curated for every time of year.",
  icon:<Flower2 height={"70px"} width={"70px"} />
},
{
  id: 10,
  title: "Subscription Plans",
  description: "Enjoy regular flower deliveries with our flexible subscription plans for home or office.",
  icon:<CalendarDays height={"70px"} width={"70px"} />
}

];

 export { PRODUCTS, OUR_SERVICES };



 