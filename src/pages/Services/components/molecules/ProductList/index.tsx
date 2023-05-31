import { ProductCard } from '../ProductCard';

export function ProductList() {
  return (
    <div className="w-full mt-8">
      {[1, 2, 3, 4].map((item) => (
        <ProductCard key={item} />
      ))}
    </div>
  );
}
