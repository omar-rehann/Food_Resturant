import Header from "../_component/Header/page"
import AllServices from "../_component/allservices/page"
import Footer from "../_component/footer/page"
export const metadata = {
  title: "Our Services | Home Services",
  description: "Browse our full range of home services, including cleaning, plumbing, electrical work, maintenance, and more.",
  keywords: ["home services", "cleaning services", "plumbing", "electrical", "maintenance", "handyman", "all services"],
  openGraph: {
    title: "Our Services | Home Services",
    description: "Explore all the home services we offer, from cleaning to repairs and everything in between.",
    type: "website",
  },
}
function Servciespage(){
    return(
        <>
        <Header/>
        <AllServices/>
        <Footer/>
        </>
    )
}
export default Servciespage