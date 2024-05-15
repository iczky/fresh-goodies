import { CirclePlus } from "lucide-react";
import Image from "next/image";

interface cardProps {
  img: string;
  price: number;
  name: string;
}

const Card: React.FC<cardProps> = ({ img, price, name }) => {
  return (
    <div className="px-4 py-4 rounded-lg bg-card-bg">
      <div className="flex flex-col gap-5">
        <div className="flex w-auto h-auto">
          <Image
            src={img}
            width={1000}
            height={1000}
            alt="Card Img"
            quality={100}
            className="mix-blend-darken"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-xl">{`$${price}`}</h2>
          <p className="text-lg">{name}</p>
        </div>
        <div className="flex justify-between">
          <p>1 Kg</p>
          <CirclePlus />
        </div>
      </div>
    </div>
  );
};

export default Card;
