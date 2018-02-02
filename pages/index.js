import Link from 'next/link';
import Layout from './../components/layouts/DefaultLayout';
import ProductList from './../containers/ProductList';

export default () => (
  <Layout>
    <div>
      <img
        src="/static/banners/buy-sell-banner.jpg"
        alt="Buy & Sell Things You Love"
        width="100%"
      />
    </div>
    <h1>Buy & Sell Things You Love</h1>
    <h5>The fast and easy way for anyone to buy and sell From your phone.</h5>

    <div className="trending-bar flex flex-row bg-grey-lighter my-2 py-2">
      <div className="flex-1">
        <h2>Trending</h2>
      </div>
      <div className="flex content-end self-center">
        <Link prefetch href="/feed">
          <a>View All</a>
        </Link>
      </div>
    </div>
    <ProductList api="https://gist.githubusercontent.com/pramendra/570fd75b830c1edd04cbee066c52136e/raw/e42bf2c5d305a34d92b977eaa4ea9e9da7ecf5bf/product-list-mock-small" />
  </Layout>
);
