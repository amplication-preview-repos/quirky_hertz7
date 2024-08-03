import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  ticket?: TicketWhereUniqueInput;
  transactionDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
