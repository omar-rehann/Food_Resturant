import Header from "../_component/Header/page"
import About from "../_component/about/page"
import Whychoose from "../_component/why choose/page"
import Appstore from "../_component/appstore/page"
import Footer from "../_component/footer/page"
export const metadata = {
  title: "About Us | Food Dilvery Resturant",
  description: "Learn more about Your Store Name — our story, our mission, and why customers choose us.",
  keywords: ["about us", "our story", "why choose us", "your store name"],
  openGraph: {
    title: "About Us | Your Store Name",
    description: "Learn more about Your Store Name — our story, our mission, and why customers choose us.",
    type: "website",
  },
}
function AboutUs(){
    return(
        <>
        <div className="aboutus">
            <Header/>
            <About/>
            <Whychoose/>
            <Appstore/>
            <Footer/>
        </div>
        </>
    )
}
export default AboutUs