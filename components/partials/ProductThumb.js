export default ({ id, name, price, image_src }) => (
  <div className="relative">
    <style jsx>
      {`
        @tailwind utilities;
        .price {
          @apply .text-white;
          @apply .bg-grey-dark;
        }
      `}
    </style>
    <img className="block h-64" src={image_src} alt="" />
    <h5 className="price absolute pin-r pin-b p-1">${price}</h5>
  </div>
);
