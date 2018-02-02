// @flow
import React from 'react';
import Head from 'next/head';
import Layout from './../components/layouts/DefaultLayout';
import ProductList from './../containers/ProductList';

export default () => (
  <Layout>
    <Head>
      <title>Women - BUY & SELL THINGS YOU LOVE</title>
      <meta
        name="description"
        content="Women - Under the category for Women, there are a number of products like clothing and accessories, that include sweaters, jeans, skirts, dresses, athletic apparel, coats and jackets, swimwear, jewelry, shoes and sandals, maternity wear and much more. Watches, handbags, belts and cosmetics also fall under this category. There are products available for different seasons as well. Women’s products are available with a number of international fashion brands like Levi’s, Ralph Lauren, Clara, Calvin Klein, Louis Vuitton, Juicy Couture and many other such fashion brands. No matter what your budget, style or choices of color, you will find something that is perfect for you here."
      />
    </Head>
    <ProductList api="https://gist.githubusercontent.com/pramendra/2ecb7a5725496fe7d290c0ae2c2a9c36/raw/394c8b71235a2456b8465f47bb84829e3913bc48/product-list-mock" />
  </Layout>
);
