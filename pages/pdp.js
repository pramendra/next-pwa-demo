import Link from 'next/link';

export default () => (
  <div>
    Welcome to PDP page!
    <style jsx>{`
      a {
        color: green;
      }
    `}</style>
    <Link prefetch href="/">
      <a>Home</a>
    </Link>
  </div>
);
