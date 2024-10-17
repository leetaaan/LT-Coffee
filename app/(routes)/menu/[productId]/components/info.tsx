"use client";

import { Button } from "@/components/ui/button";
import useCarts from "@/hooks/use-carts";
import { cn, formatter } from "@/lib/utils";
import { Products } from "@/types-db";
import { Coffee, ShoppingCart, SquareActivity } from "lucide-react";
import { useState } from "react";

interface InforProps {
  product: Products;
}
const Info = ({ product }: InforProps) => {
  const [qty, setQty] = useState(1);

  const cart = useCarts();
  const addToCart = (data: Products) => {
    cart.addItem({ ...data, qty: qty });
  };

  const handleQty = (num: number) => {
    setQty(num);
    cart.updateItemQuantity(product.id, num);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-neutral-800">{product.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-base text-left text-neutral-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis ex
          dignissimos eius mollitia totam temporibus modi soluta consequuntur,
          commodi nam? Est dolore provident natus numquam quidem? Provident
          temporibus pariatur quod.
        </p>
      </div>

      <div className="w-full flex items-center justify-start gap-2 flex-wrap px-2 mt-8">
        {product.category && (
          <div className="rounded-md bg-emerald-500/10 px-3 py-2 text-base font-semibold capitalize flex items-center gap-2">
            <Coffee className="w-5 h-5" />
            {product.category}
          </div>
        )}
        {product.size && (
          <div className="rounded-md bg-yellow-500/10 px-3 py-2 text-base font-semibold capitalize flex items-center gap-2">
            <SquareActivity className="w-5 h-5" />
            {product.size}
          </div>
        )}
      </div>

      <div className="w-full grid grid-cols-4 my-12">
        <div className="col-span-1 space-y-8">
          <p className="text-lg font-semibold text-neutral-700">Price</p>
          <p className="text-lg font-semibold text-neutral-700">Serves</p>
        </div>
        <div className="col-span-3 space-y-8">
          <p className="text-xl font-bold text-black">
            {formatter.format(product.price)}
          </p>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                className={cn(
                  "w-8 h-8 cursor-pointer rounded-full flex items-center justify-center border border-hero",
                  qty === num
                    ? "bg-hero shadow-md text-white"
                    : "bg-transparent shadow-none"
                )}
                onClick={() => handleQty(num)}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button
        onClick={() => addToCart(product)}
        className="w-full py-6 text-xl font-semibold hover:bg-hero hover:text-white flex items-center justify-center gap-3"
      >
        Thêm vào giỏ hàng
        <ShoppingCart className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default Info;
