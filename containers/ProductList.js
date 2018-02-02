import { Component } from 'react';
import ProductList from './../components/partials/ProductList';
import { fetchAPI } from './../helpers/utilities';

export default class ProductListContainer extends Component {
  state = {
    list: []
  };
  async componentDidMount() {
    const list = await fetchAPI(this.props.api);
    this.setState({ list });
  }
  render() {
    return <ProductList list={this.state.list} />;
  }
}
