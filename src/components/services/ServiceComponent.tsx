import { MoveRight } from "lucide-react";
import React from "react";

interface ServiceProps {
  service: {
    title: string;
    discription: string;
  };
}

const ServiceComponent: React.FC<ServiceProps> = ({ service }) => {
  return (
    <div className="p-6 border flex flex-col gap-y-3 rounded-lg text-black  bg-white mt-10 ml-6">
      <div className="mt-10 h-12  text-black text-4xl font-semibold whitespace-pre">
        {service.title}
      </div>
      <div>
        <p className="text-2xl leading-9  text-[#9197a3] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus,
          ante et consequat tincidunt.
        </p>
      </div>
      <div className="flex gap-x-4">
        <div
          className="size-[4rem] bg-[#034B63] rounded-full flex justify-center items-center
      hover:-rotate-[30deg] transition-all ease-in-out duration-300
       cursor-pointer hover:scale-110 hover:shadow-lg  
      "
        >
          <MoveRight stroke="white" size={40} strokeWidth={1.3}  />
        </div>
        <div className="text-gray-400 whitespace-pre flex items-center justify-center text-2xl">
          Read more
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
