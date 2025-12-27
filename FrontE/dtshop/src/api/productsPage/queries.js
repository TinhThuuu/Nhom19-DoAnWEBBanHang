import { useQuery } from "@tanstack/react-query";
import { getProductsAPI } from "./request";

export const useProductsUS = (params, option) => {
  return useQuery({
    queryKey: ["GetProductsAPI", params],
    queryFn: () => getProductsAPI(params),
    ...option,
  });
};
