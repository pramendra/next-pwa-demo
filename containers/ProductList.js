// @flow
/* eslint-disable react/no-did-mount-set-state */
import React, { Component } from 'react';
import ProductList from './../components/partials/ProductList';
import { fetchAPI } from './../helpers/utilities';
import type { productsType } from './../types/';

type Props = {
  api: string
};
type State = productsType;
class ProductListContainer extends Component<Props, State> {
  state = { list: [] };
  async componentDidMount() {
    const list = await fetchAPI(this.props.api);
    this.setState({ list });
  }
  render() {
    return <ProductList list={this.state.list} />;
  }
}

export default ProductListContainer;
