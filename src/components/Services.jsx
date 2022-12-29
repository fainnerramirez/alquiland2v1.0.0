import React from "react";
import { ServiceItem } from "./ServicesItem";
import { BsHouseDoor } from "react-icons/bs";
import { TbTractor } from "react-icons/tb";
import { BiBuildingHouse } from "react-icons/bi";
import { GiMountainCave } from "react-icons/gi";
import { MdHouseSiding } from "react-icons/md";
import { TbCar } from "react-icons/tb";
import { GrFavorite } from "react-icons/gr";
import { FaSwimmingPool } from "react-icons/fa";
import { GiSpookyHouse } from "react-icons/gi";

export const Services = () => {

    const dataService = [
        {
            id: 0,
            name: "Populares",
            icon: <GrFavorite size="50px" />,
            link: "/"
        },
        {
            id: 1,
            name: "Casas",
            icon: <BsHouseDoor size="50px" />,
            link: "/casas"
        },
        {
            id: 2,
            name: "Maquinaria",
            icon: <TbTractor size="50px" />,
            link: "/maquinarias"
        },
        {
            id: 3,
            name: "Construccion",
            icon: <BiBuildingHouse size="50px" />,
            link: "/construccion"
        },
        {
            id: 4,
            name: "Fincas",
            icon: <GiMountainCave size="50px" />,
            link: "/fincas"
        },
        {
            id: 5,
            name: "Locales para negocio",
            icon: <MdHouseSiding size="50px" />,
            link: "/locales-negocio"
        },
        {
            id: 6,
            name: "Carros",
            icon: <TbCar size="50px" />,
            link: "/carros"
        },
        {
            id: 7,
            name: "Piscinas",
            icon: <FaSwimmingPool size="50px" />,
            link: "/piscinas"
        },
        {
            id: 8,
            name: "Salones para eventos",
            icon: <GiSpookyHouse size="50px" />,
            link: "/salones-eventos"
        }
    ];

    return (dataService.map(service => <ServiceItem key={service.id} name={service.name} icon={service.icon} link={service.link} />));
}