// @flow
import type { Element } from 'react';

export type ElementChild =
  | void
  | null
  | boolean
  | number
  | string
  | Element<any>;

export type ElementChildren = ElementChild | Array<ElementChild>;

export type nullRenderer = () => Element<any> | null;

export type layoutType = {
  children: ElementChildren,
  renderHeader?: nullRenderer,
  renderFooter?: nullRenderer
};

export type productType = {
  id: number,
  name: string,
  price: number,
  image_src: string
};

export type productsType = {
  list?: Array<productType>
};
