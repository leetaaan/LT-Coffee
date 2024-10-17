import { Products } from "@/types-db";
import queryString from "query-string";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  size?: string;
  isFeatured?: boolean;
  isHot?: boolean;
  category?: string;
  isCold?: boolean;
}

const getProducts = async (query: Query): Promise<Products[]> => {
  const url = queryString.stringifyUrl({
    url: URL,
    query: {
      size: query.size,
      isFeatured: query.isFeatured,
      isHot: query.isHot,
      category: query.category,
      isCold: query.isCold,
    },
  });

  const res = await fetch(url);
  return res.json(); 
};

export default getProducts;
