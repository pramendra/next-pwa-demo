import ProductThumb from './ProductThumb';

const Item = props => (
  <div className="w-1/2 mb-4 2 pr-4 bg-grey-light">
    <ProductThumb {...props} />
  </div>
);
export default ({ list = [] }) => (
  <div className="flex flex-wrap -mb-4 -mr-4">
    {list.map((item, index) => <Item key={index} {...item} />)}
  </div>
);
