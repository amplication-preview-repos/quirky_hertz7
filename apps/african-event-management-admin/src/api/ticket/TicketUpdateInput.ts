import { AttendeeUpdateManyWithoutTicketsInput } from "./AttendeeUpdateManyWithoutTicketsInput";
import { TransactionUpdateManyWithoutTicketsInput } from "./TransactionUpdateManyWithoutTicketsInput";

export type TicketUpdateInput = {
  attendees?: AttendeeUpdateManyWithoutTicketsInput;
  price?: number | null;
  seat?: string | null;
  status?: "Option1" | null;
  transactions?: TransactionUpdateManyWithoutTicketsInput;
};
