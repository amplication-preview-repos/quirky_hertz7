import { AttendeeListRelationFilter } from "../attendee/AttendeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type TicketWhereInput = {
  attendees?: AttendeeListRelationFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  seat?: StringNullableFilter;
  status?: "Option1";
  transactions?: TransactionListRelationFilter;
};
