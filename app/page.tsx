import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 gap-4 px-5">
        <Card img="/products/cucumber.png" name="Cucumber" price={3.5} />
        <Card img="/products/cucumber.png" name="Cucumber" price={3.5} />
        <Card img="/products/cucumber.png" name="Cucumber" price={3.5} />
        <Card img="/products/cucumber.png" name="Cucumber" price={3.5} />
        <Card img="/products/cucumber.png" name="Cucumber" price={3.5} />
        <Card img="/products/cucumber.png" name="Cucumber" price={3.5} />
        <Card img="/products/cucumber.png" name="Cucumber" price={3.5} />
      </div>
    </>
  );
}
