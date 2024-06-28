import React from "react";
import ServiceComponent from "./ServiceComponent";

interface Service {
  title: string;
  discription: string;
}

const Middle: React.FC = () => {
  const services: Service[] = [
    {
      title: "Office Cleaning",
      discription:
        "Use h-full to set an element’s height to 100% of its parent, as long as the parent has a defined height.",
    },
    {
      title: "Office Cleaning",
      discription:
        "Use h-full to set an element’s height to 100% of its parent, as long as the parent has a defined height.",
    },
    {
      title: "Office Cleaning",
      discription:
        "Use h-full to set an element’s height to 100% of its parent, as long as the parent has a defined height.",
    },
    {
      title: "Office Cleaning",
      discription:
        "Use h-full to set an element’s height to 100% of its parent, as long as the parent has a defined height.",
    },
    {
      title: "Pub & Club Cleaning",
      discription:
        "Use h-full to set an element’s height to 100% of its parent, as long as the parent has a defined height.",
    },
    {
      title: "Office Cleaning",
      discription:
        "Use h-full to set an element’s height to 100% of its parent, as long as the parent has a defined height.",
    },
    {
      title: "Office Cleaning",
      discription:
        "Use h-full to set an element’s height to 100% of its parent, as long as the parent has a defined height.",
    },
    {
      title: "Office Cleaning",
      discription:
        "Use h-full to set an element’s height to 100% of its parent, as long as the parent has a defined height.",
    },
  ];

  return (
    <div className="w-screen h-[80rem] bg-[#F1F1F1]">
      <div className="grid grid-cols-3 justify-center m-10">
        {services.map((service, index) => (
          <ServiceComponent key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Middle;
