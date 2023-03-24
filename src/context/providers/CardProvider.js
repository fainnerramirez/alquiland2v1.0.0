import React from "react";
import CardContext from "./CardContext";
import moment from "moment";

export const CardProvider = ({ children }) => {
  const image =
    "https://pixabay.com/es/photos/casa-piscina-dise%c3%b1o-de-interiores-1477041/";

  const data = [
    {
      id: 1,
      images: image,
      location: "Santa Marta, Colombia",
      date: moment().format("d/MM/YYYY"),
      price: "457.000 COP/mes",
      user: "Fainner Ramirez",
      category: "Casas",
    },
    {
      id: 2,
      images: image,
      location: "Santa Marta, Colombia",
      date: moment().format("d/MM/YYYY"),
      price: "457.000 COP/mes",
      user: "Fainner Ramirez",
      category: "Casas",
    },
    {
      id: 3,
      images: image,
      location: "Santa Marta, Colombia",
      date: moment().format("d/MM/YYYY"),
      price: "457.000 COP/mes",
      user: "Fainner Ramirez",
      category: "Fincas",
    },
    {
      id: 4,
      images: image,
      location: "Santa Marta, Colombia",
      date: moment().format("d/MM/YYYY"),
      price: "457.000 COP/mes",
      user: "Fainner Ramirez",
      category: "Fincas",
    },
    {
      id: 5,
      images: image,
      location: "Santa Marta, Colombia",
      date: moment().format("d/MM/YYYY"),
      price: "450.000 COP/mes",
      user: "Fainner Ramirez",
      category: "Piscinas",
    },
    {
      id: 6,
      images: image,
      location: "Santa Marta, Colombia",
      date: moment().format("d/MM/YYYY"),
      price: "457.000 COP/mes",
      user: "Fainner Ramirez",
      category: "Piscinas",
    },
    {
      id: 7,
      images: image,
      location: "Santa Marta, Colombia",
      date: moment().format("d/MM/YYYY"),
      price: "457.000 COP/mes",
      user: "Fainner Ramirez",
      category: "Piscinas",
    },
    {
      id: 8,
      images: image,
      location: "Santa Marta, Colombia",
      date: moment().format("d/MM/YYYY"),
      price: "457.000 COP/mes",
      user: "Fainner Ramirez",
      category: "Casas",
    },
  ];

  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
};
