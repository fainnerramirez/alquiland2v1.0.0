import React, { useState } from "react";
import { ServiceItem } from "./ServicesItem";
import { BsFillHouseFill } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { Box } from "@chakra-ui/react";

export const Services = () => {
  const data = [
    {
      id: 0,
      name: "Populares",
      icon: <GrFavorite size="50px" color="#D53F8C" />,
      link: "/",
    },
    {
      id: 1,
      name: "Una Persona",
      icon: <BsFillHouseFill size="50px" color="#D53F8C" />,
      link: "/pensiones-para-1-persona",
    },
    {
      id: 2,
      name: "Dos o más Persona",
      icon: <BsFillHouseFill size="50px" color="#D53F8C"/>,
      link: "/pensiones-para-mas-1-person",
    },
    {
      id: 3,
      name: "Apartamentos",
      icon: <BsFillHouseFill size="50px" color="#D53F8C"/>,
      link: "/apartamentos",
    },
    {
      id: 4,
      name: "Aparta-Estudios",
      icon: <BsFillHouseFill size="50px" color="#D53F8C"/>,
      link: "/apartaestudios",
    },
    
  ];

  const [dataService, setDataService] = useState(data);

  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-evenly"}>
      {dataService.map((service) => (
        <ServiceItem
          key={service.id}
          name={service.name}
          icon={service.icon}
          link={service.link}
        />
      ))}
    </Box>
  );
};
