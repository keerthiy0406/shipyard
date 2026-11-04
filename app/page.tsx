import Image from "next/image";
import Link from "next/link";
import { products } from "../lib/products";

export default function Home() {
  return (
    <>
      <h1>Products</h1>
      <div className="grid">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.id}`} className="card">
            <Image src={p.image} alt={p.name} width={360} height={270} />
            <h2>{p.name}</h2>
            <p>${p.price}</p>
          </Link>
        ))}
      </div>
    </>
  );
}