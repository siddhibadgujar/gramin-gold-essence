import ProductCard from "./ProductCard";
import products from "../data/product";

export default function Product() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
        Our Products
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}