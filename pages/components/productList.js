import { get } from "../api/products";
import { useEffect } from "react";
import Item from "./productItem";
import { useProductStore } from "../states/products";

export default function List() {
  const products = useProductStore((s) => s.products);
  const setProducts = useProductStore((s) => s.setProducts);

  useEffect(() => {
    (async () => {
      setProducts(await get());
    })();

    return () => {};
  }, [setProducts]);

  return (
    <div>
      {products.map((item, i) => (
        <Item key={i} data={item} />
      ))}
    </div>
  );
}
