import Navbarcomponent from "../components/Header/page"
import Addlist from "../components/addlist/page"
import Footer from "../components/Footer/page"
export const metadata = {
  title: "Home | Food Dilvery Resturant ",
  description: "Order your favorite food online from Your Restaurant Name — fresh, fast, and delicious.",
  keywords: ["restaurant", "order food online", "food delivery", "your restaurant name"],
  openGraph: {
    title: "Home | Your Restaurant Name",
    description: "Order your favorite food online from Your Restaurant Name — fresh, fast, and delicious.",
    type: "website",
  },
}
function Homepage(){
    return(
        <>
        <Navbarcomponent/>
        <Addlist/>
        <Footer/>
        </>
    )
}
export default Homepage