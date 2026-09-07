import Navbarcomponent from "../components/Header/page"
import Showallcat from "../components/showcat/page"
import Footer from "../components/Footer/page"

export const metadata = {
  title: "All Categories | Food Resturant Dilevry",
  description: "Explore all food categories — from salads and soups to desserts and more.",
  keywords: ["categories", "food categories", "menu categories", "your restaurant name"],
  openGraph: {
    title: "All Categories | Your Restaurant Name",
    description: "Explore all food categories — from salads and soups to desserts and more.",
    type: "website",
  },
}
function showcategorey(){
    return(
        <>
        <Navbarcomponent/>
        <Showallcat/>
        <Footer/>
        </>
    )
}
export default showcategorey