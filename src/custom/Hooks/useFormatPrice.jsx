import { useEffect, useState } from 'react';

export const useFormatPrice = () => {
  const convertPrice = (price) => {
    const formattedValue = price.replace(/[\.,]/g, '');
    const formattedNumber = new Intl.NumberFormat('es-ES').format(formattedValue);
    return formattedNumber;
  };

  return { convertPrice };
}