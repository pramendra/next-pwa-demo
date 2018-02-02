// @flow
import React from 'react';
import ProductThumb from './ProductThumb';
import type { productsType } from './../../types/';

const Item = props => (
  <div className="w-1/2 mb-4 2 pr-4 bg-grey-light">
    <ProductThumb {...props} />
  </div>
);
export default ({ list = [] }: productsType) => (
  <div className="flex flex-wrap -mb-4 -mr-4">
    {list.map(item => <Item key={item.id} {...item} />)}
  </div>
);
