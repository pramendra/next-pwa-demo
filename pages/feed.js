// @flow
import React from 'react';
import Layout from './../components/layouts/DefaultLayout';
import ProductList from './../containers/ProductList';

export default () => (
  <Layout>
    <ProductList api="https://gist.githubusercontent.com/pramendra/2ecb7a5725496fe7d290c0ae2c2a9c36/raw/394c8b71235a2456b8465f47bb84829e3913bc48/product-list-mock" />
  </Layout>
);
