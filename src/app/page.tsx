import Banner from "@/components/Banner";
import FeaturesProduct from "@/components/FeaturesProduct";
import BeautifulSofa from "@/components/homeCompo/BeautifulSofa";
import OurProducts from "@/components/homeCompo/OurProducts";
import allProducts, { Product } from "@/dataFeatch/allProducts";



export default async function Home() {
  const allData : Product[] = await allProducts();



  return (
    <main>
      <Banner/>
      <FeaturesProduct/>
      <BeautifulSofa/>
      <OurProducts allData={allData}/>
    </main>
  );
}
