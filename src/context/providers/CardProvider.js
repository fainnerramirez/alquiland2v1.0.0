import React from "react";
import CardContext from "./CardContext";
import moment from "moment";

export const CardProvider = ({ children }) => {
  const data = [
    {
      id: 1,
      images:
        "https://pixabay.com/es/photos/casa-piscina-dise%c3%b1o-de-interiores-1477041/",
      location: "Barrio la esperanza- EL copey",
      date: moment().format("d/MM/YYYY"),
      price: "$450.000 mes",
      user: "Fainner Ramirez",
      category: "Casas",
    },
    {
      id: 2,
      images:
        "https://pixabay.com/es/photos/casa-piscina-dise%c3%b1o-de-interiores-1477041/",
      location: "Barrio la esperanza- EL copey",
      date: moment().format("d/MM/YYYY"),
      price: "$450.000 mes",
      user: "Fainner Ramirez",
      category: "Casas",
    },
    {
      id: 3,
      images:
        "https://pixabay.com/es/photos/casa-piscina-dise%c3%b1o-de-interiores-1477041/",
      location: "Finca el trebol - Bosconia",
      date: moment().format("d/MM/YYYY"),
      price: "$450.000 mes",
      user: "Fainner Ramirez",
      category: "Fincas",
    },
    {
      id: 4,
      images:
        "https://pixabay.com/es/photos/casa-piscina-dise%c3%b1o-de-interiores-1477041/",
      location: "Finca ramirez - EL copey",
      date: moment().format("d/MM/YYYY"),
      price: "$450.000 mes",
      user: "Fainner Ramirez",
      category: "Fincas",
    },
    {
      id: 5,
      images:
        "https://pixabay.com/es/photos/casa-piscina-dise%c3%b1o-de-interiores-1477041/",
      location: "Piscina A - Bosconio",
      date: moment().format("d/MM/YYYY"),
      price: "$450.000 por mes",
      user: "Fainner Ramirez",
      category: "Piscinas",
    },
    {
      id: 6,
      images:
        "https://pixabay.com/es/photos/casa-piscina-dise%c3%b1o-de-interiores-1477041/",
      location: "Piscina Escape 22 - Algarrobo",
      date: moment().format("d/MM/YYYY"),
      price: "$450.000 mes",
      user: "Fainner Ramirez",
      category: "Piscinas",
    },
    {
      id: 7,
      images:
        "https://pixabay.com/es/photos/casa-piscina-dise%c3%b1o-de-interiores-1477041/",
      location: "Piscina amalia rosa - Santa marta",
      date: moment().format("d/MM/YYYY"),
      price: "$450.000 mes",
      user: "Fainner Ramirez",
      category: "Piscinas",
    },
    {
      id: 8,
      images:
        "https://pixabay.com/es/photos/casa-piscina-dise%c3%b1o-de-interiores-1477041/",
      location: "Barrio la el Bosque- EL copey",
      date: moment().format("d/MM/YYYY"),
      price: "$450.000 mes",
      user: "Fainner Ramirez",
      category: "Casas",
    },
  ];

  return <CardContext.Provider value={data}>{children}</CardContext.Provider>;
};
