import { AttendeeCreateNestedManyWithoutTicketsInput } from "./AttendeeCreateNestedManyWithoutTicketsInput";
import { TransactionCreateNestedManyWithoutTicketsInput } from "./TransactionCreateNestedManyWithoutTicketsInput";

export type TicketCreateInput = {
  attendees?: AttendeeCreateNestedManyWithoutTicketsInput;
  price?: number | null;
  seat?: string | null;
  status?: "Option1" | null;
  transactions?: TransactionCreateNestedManyWithoutTicketsInput;
};
