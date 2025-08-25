import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userStats: builder.query({
      query: () => ({
        url: "stats/user",
        method: "GET",
      }),
      providesTags: ["STATS"],
    }),
    transactionsStats: builder.query({
      query: () => ({
        url: "stats/transactions",
        method: "GET",
      }),
      providesTags: ["TRXSTATS"],
    }),
    allTransactions: builder.query({
      query: (params) => ({
        url: "trx/all-transactions",
        method: "GET",
        params,
      }),
      providesTags: ["TRX"],
    }),
    walletStats: builder.query({
      query: (params) => ({
        url: "stats/wallets",
        method: "GET",
        params,
      }),
      providesTags: ["WALLETSTATS"],
    }),
  }),
});

export const {
  useUserStatsQuery,
  useAllTransactionsQuery,
  useTransactionsStatsQuery,
  useWalletStatsQuery,
} = adminApi;
