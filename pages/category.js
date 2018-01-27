import Link from 'next/link';
export default () => (
  <div>
    Welcome to category page!
    <Link prefetch href="/pdp">
      <a>Product detail page</a>
    </Link>
  </div>
);
