import Header from "../_component/Header/page"
import ContactPage from "../_component/conatct/page"
import Footer from "../_component/footer/page"
export const metadata = {
  title: "Contact Us | Home Services",
  description: "Get in touch with our home services team for questions, support, or booking inquiries. We're here to help.",
  keywords: ["contact", "home services", "support", "customer service", "get in touch"],
  openGraph: {
    title: "Contact Us | Home Services",
    description: "Reach out to us for any questions or support regarding our home services.",
    type: "website",
  },
}
function Contactpage(){
    return(
        <>
        <Header/>
        <ContactPage/>
         <Footer/>
        </>
    )
}
export default Contactpage