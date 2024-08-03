import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  ticket?: TicketWhereUniqueInput | null;
  transactionDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
