import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import CardWrapper from "./components/CardWrapper";
import CardDrawer from "./components/CardDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <CardWrapper />
      <CardDrawer />
    </>
  );
}
