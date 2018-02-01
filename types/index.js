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

export type nullComponent = () => void;

export type layoutType = {
  children: ElementChildren,
  renderHeader: nullComponent,
  renderHeader: nullComponent
};
