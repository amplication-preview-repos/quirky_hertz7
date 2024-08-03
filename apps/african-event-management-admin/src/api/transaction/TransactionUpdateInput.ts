import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  ticket?: TicketWhereUniqueInput | null;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
