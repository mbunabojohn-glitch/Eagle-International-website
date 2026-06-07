import { useQuery } from "@tanstack/react-query";
import { marketTickerApi } from "../../api/services";
import type { EnergyPrice } from "../../types";

export const useMarketTicker = () => {
  return useQuery<EnergyPrice[], Error>({
    queryKey: ["marketTicker"],
    queryFn: async () => marketTickerApi.getEnergyPrices(),
    refetchInterval: 60000, // Auto-refresh every 60 seconds
    staleTime: 30000,
  });
};
