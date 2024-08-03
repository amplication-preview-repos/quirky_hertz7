import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendeeWhereInput = {
  event?: EventWhereUniqueInput;
  id?: StringFilter;
  ticket?: TicketWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
