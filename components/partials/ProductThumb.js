// @flow
import React from 'react';
import type { productType } from './../../types/';

export default ({ id, name, price, image_src: src }: productType) => (
  <div className="relative" key={id}>
    <img className="block h-64" src={src} alt={name} />
    <h5 className="text-white bg-grey-dark absolute pin-r pin-b p-1">
      ${price}
    </h5>
  </div>
);
