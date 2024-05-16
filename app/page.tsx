import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CardWrapper from "./components/CardWrapper";
import CardDrawer from "./components/CardDrawer";
import { ProductsProvider } from "@/hook/ProductsProvider";
import { ShoppingCartProvider } from "@/hook/ShoopingCartProvider";

export default function Home() {
  return (
    <>
      <Navbar />
      <CardWrapper />
    </>
  );
}
