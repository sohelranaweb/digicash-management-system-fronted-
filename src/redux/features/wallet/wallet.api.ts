import { baseApi } from "@/redux/baseApi";
import type {
  ICashInResponse,
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
      invalidatesTags: ["USER"],
    }),
    cashIn: builder.mutation<
      IResponse<ICashInResponse>,
      {
        userId: string;
        amount: number;
        reference: string;
      }
    >({
      query: (body) => ({
        url: "wallet/cash-in",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["USER"],
    }),
    cashOut: builder.mutation<ICashOutApiResponse, ICashOutBody>({
      query: (body) => ({
        url: "/wallet/cash-out",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["USER", "WALLET"],
    }),
    manageBlock: builder.mutation({
      query: ({ walletId, body }) => ({
        url: `/wallet/unblock/${walletId}`,
        method: "PATCH",
        data: body,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useGetMyWalletAndTrxQuery,
  useTopUpWalletMutation,
  useSendMoneyMutation,
  useCashOutMutation,
  useCashInMutation,
  useManageBlockMutation,
} = walletApi;
