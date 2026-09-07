import Navbarcomponent from "../components/Header/page"
import Show from "../components/showfood/page"
import Footer from "../components/Footer/page"
export const metadata = {
  title: "Our Menu | The Food Resturant Dlivery",
  description: "Browse our full menu — salads, soups, desserts, and more, made fresh with quality ingredients.",
  keywords: ["menu", "food", "restaurant", "your restaurant name"],
  openGraph: {
    title: "Our Menu | Your Restaurant Name",
    description: "Browse our full menu — salads, soups, desserts, and more, made fresh with quality ingredients.",
    type: "website",
  },
}
function Showfood(){
    return(
        <>
            <Navbarcomponent/>
            <Show/>
            <Footer/>
        </>
    )
}

export default Showfood