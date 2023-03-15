import React from 'react';
import { calculatePercentage } from '../../../functions/commonFunc';
// import calculatePercentage from '../../../functions/commonFunc';

const ProductOption = props => {
  // const calculatePercentage = (count, price) => {
  //   let calculatedPrice = 0;

  //   if (typeof count === 'string') Number(count);
  //   if (count >= 1 && count < 5) {
  //     //5개 미만 미할인
  //     calculatedPrice = price;
  //   } else if (count >= 5 && count < 10) {
  //     //5개 이상 5% 할인
  //     calculatedPrice = Math.floor((price * 0.95) / 10) * 10;
  //   } else if (count >= 10 && count < 30) {
  //     //10개 이상 8% 할인
  //     calculatedPrice = Math.floor((price * 0.92) / 10) * 10;
  //   } else if (count >= 30 && count < 50) {
  //     //30개 이상 10% 할인
  //     calculatedPrice = Math.floor((price * 0.9) / 10) * 10;
  //   } else if (count >= 50) {
  //     //50개 이상 13% 할인
  //     calculatedPrice = Math.floor((price * 0.87) / 10) * 10;
  //   } else {
  //     calculatedPrice = price;
  //   }

  //   return calculatedPrice;
  // };
  const { product } = props;
  return PRODUCT.map(info => (
    <option key={info.id}>
      {info.p}개{' '}
      {`${calculatePercentage(
        info.p,
        product?.price * info.p
      ).toLocaleString()}`}
      원
    </option>
  ));
};
// console.log(price);

export default ProductOption;

const PRODUCT = [
  { id: 1, p: 1 },
  { id: 2, p: 5 },
  { id: 3, p: 10 },
  { id: 4, p: 30 },
  { id: 5, p: 50 },
];
