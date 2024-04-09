import Image from "next/image";
import Hero from '@/components/Hero'
import Product from "@/components/Product";

export default function Home() {
  return (
    <main>
       <Hero />
       <div className="  border-t-2  text-black border-pink-300 hidden sm:block">
         <Product />
       </div>
    </main>
  );
}
