import { IProduct, ProductCard } from '../ProductCard';

type PropsType = {
  list: IProduct[];
};

export function ProductList({ list }: PropsType) {
  return (
    <div className="w-full mt-8">
      {list.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
