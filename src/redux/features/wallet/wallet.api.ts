import { baseApi } from "@/redux/baseApi";
import type {
  ICashOutApiResponse,
  ICashOutBody,
  IResponse,
  ISendMoneyResponse,
  ITopUpData,
} from "@/types";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyWalletAndTrx: builder.query({
      query: (params) => ({
        url: "wallet/wallet-trnx-history",
        method: "GET",
        params,
      }),
      providesTags: ["WALLET"],
    }),
    topUpWallet: builder.mutation<IResponse<ITopUpData>, { amount: number }>({
      query: (body) => ({
        url: "wallet/top-up",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["USER"],
    }),
    sendMoney: builder.mutation<
      IResponse<ISendMoneyResponse>,
      {
        receiverId: string;
        amount: number;
        reference: string;
      }
    >({
      query: (body) => ({
        url: "wallet/send-money",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["USER"], // user info auto-refetch হবে
    }),
    cashOut: builder.mutation<ICashOutApiResponse, ICashOutBody>({
      query: (body) => ({
        url: "/wallet/cash-out",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["USER", "WALLET"], // refresh balances
    }),
  }),
});

export const {
  useGetMyWalletAndTrxQuery,
  useTopUpWalletMutation,
  useSendMoneyMutation,
  useCashOutMutation,
} = walletApi;
