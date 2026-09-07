import Header from "../_component/Header/page"
import Showpopular from "../_component/showpopular/page";
import Footer from "../_component/footer/page";
export const metadata = {
  title: "All Products | Your Store Name",
  description: "Browse our full range of products at the best prices and top quality.",
  keywords: ["products", "online store", "shop online"],
  openGraph: {
    title: "All Products | Your Store Name",
    description: "Browse our full range of products at the best prices and top quality.",
    type: "website",
  },
}
function ShowProduct(){
    return(
        <>
        <Header/>
        <Showpopular/>
        <Footer/>
        </>
    )
}
export default ShowProduct