import OurProducts from "@/components/homeCompo/OurProducts";
import ShopBanner from "@/components/shopCompo/ShopBanner";
import allProducts, { Product } from "@/dataFeatch/allProducts";


export default async function Home() {
  const allData: Product[] = await allProducts();



  return (
    <main className="mt-20">
      <ShopBanner/>
      <div className="mt-32">
        <OurProducts allData={allData} />
      </div>
    </main>
  );
}