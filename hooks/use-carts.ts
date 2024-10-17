import { Products } from "@/types-db";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: Products[];
  addItem: (data: Products) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  updateItemQuantity: (id: string, quantity: number) => void;
}

const useCarts = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Products) => {
        const currentItems = get().items;
        const existingItems = currentItems.find((item) => item.id === data.id);

        if (existingItems) {
          return toast("Sản phẩm tồn tại trong giỏ");
        }
        set({ items: [...get().items, data] });
        toast.success("Sản phẩm đã được thêm trong giỏ");
      },

      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Sản phẩm đã được xóa trong giỏ");
      },

      removeAll: () => set({ items: [] }),
      updateItemQuantity: (id: string, qty: number) => {
        const updatedItems = get().items.map((item) =>
          item.id === id ? { ...item, qty } : item
        );
        set({ items: updatedItems });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCarts;
