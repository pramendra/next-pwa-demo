// @flow
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import ProductList from './../containers/ProductList';

const Layout = dynamic(import('./../components/layouts/DefaultLayout'));

export default () => (
  <Layout>
    <Head>
      <title>BUY & SELL THINGS YOU LOVE</title>
      <meta
        name="description"
        content="Mercari provides a hassle-free and secure way for anyone to buy and sell stuff straight from their mobile device. We provide a buyer protection guarantee so you can buy in confidence."
      />
    </Head>
    <div>
      <img
        src="/static/banners/buy-sell-banner.jpg"
        alt="Buy & Sell Things You Love"
        className="block w-full"
      />
    </div>
    <div className="p-2">
      <h1 className="text-red-light text-2xl p-2">
        Buy & Sell Things You Love
      </h1>
      <h5 className="text-grey-base text-sm font-thin p-2">
        The fast and easy way for anyone to buy and sell From your phone.
      </h5>
    </div>
    <div className="trending-bar flex flex-row bg-grey-lighter my-2 p-2">
      <div className="flex-1">
        <h2 className="text-grey-base text-lg font-thin p-2">Trending</h2>
      </div>
      <div className="flex content-end self-center">
        <Link prefetch href="/feed">
          <a className="text-grey-base text-sm font-thin p-2">View All</a>
        </Link>
      </div>
    </div>
    <ProductList api="https://gist.githubusercontent.com/pramendra/570fd75b830c1edd04cbee066c52136e/raw/e42bf2c5d305a34d92b977eaa4ea9e9da7ecf5bf/product-list-mock-small" />
  </Layout>
);
