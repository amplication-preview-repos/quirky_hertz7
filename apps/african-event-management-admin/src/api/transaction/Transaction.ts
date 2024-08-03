import { Ticket } from "../ticket/Ticket";
import { User } from "../user/User";

export type Transaction = {
  amount: number | null;
  createdAt: Date;
  id: string;
  ticket?: Ticket | null;
  transactionDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
