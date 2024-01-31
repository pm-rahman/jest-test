import Banner from "../components/Home/banner";
import { Products } from "@/components/Home/products";

export default function Home() {
  return (
    <div className="container space-y-6">
      <Banner />
      <Products/>
    </div>
  );
}
