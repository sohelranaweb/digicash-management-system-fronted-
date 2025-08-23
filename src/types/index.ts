import type { ComponentType } from "react";
export type { ISendOtp, IVerifyOtp, ILogin } from "./auth.type";

export interface IMeta {
  total: number;
  page: number;
  limit: number;
  totalPage: number;
}
export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  meta: IMeta;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}
export type TRole = "ADMIN" | "AGENT" | "USER";

type ZodIssue = {
  code: string;
  expected: string;
  received: string;
  path: string[];
  message: string;
};

type ErrorSource = {
  path: string;
  message: string;
};

export interface IErrorResponse {
  success: boolean;
  message: string;
  errorSources?: ErrorSource[];
  err?: {
    issues: ZodIssue[];
    name: string;
  };
  stack?: string;
}

export interface ITopUpData {
  balance: number; // তোমার API যা return করে সেটা বসাও
  // maybe transactionId?: string;
}

export interface ISendMoneyData {
  balance: number; // sender এর updated balance
  transactionId: string;
}

export interface ISendMoneyResponse {
  oldBalance: number;
  newSenderBalance: number;
  trxId: string;
}

// request body
export interface ICashOutBody {
  amount: number;
  agentWalletId: string;
  reference?: string;
}

// response data
export interface ICashOutResponse {
  oldBalance: number;
  totalDeducted: number;
  newBalance: number;
  fee: number;
  trxId: string;
}

// full API response
export interface ICashOutApiResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: ICashOutResponse;
}
