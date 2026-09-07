import Header from "../_component/Header/page"
import HeroSection from "../_component/Hero Section/page"
import Categories from "../_component/categories/page"
import Popular from "../_component/popular/page"
import Services from "../_component/services/page"
import Footer from "../_component/footer/page";
export const metadata = {
  title: "Your Store Name | Home",
  description: "Shop the best products online at Your Store Name — top quality, great prices, fast delivery.",
  keywords: ["online store", "shop online", "best products", "your store name"],
  openGraph: {
    title: "Your Store Name | Home",
    description: "Shop the best products online at Your Store Name — top quality, great prices, fast delivery.",
    type: "website",
  }
}
function HomePage(){
    return(
        <>
        <Header/>
        <HeroSection/>
        <Categories/>
        <Popular/>
        <Services/>
        <Footer/>
        </>
    )
}
export default HomePage