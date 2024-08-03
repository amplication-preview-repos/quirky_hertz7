import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketWhereUniqueInput } from "../ticket/TicketWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AttendeeCreateInput = {
  event?: EventWhereUniqueInput | null;
  ticket?: TicketWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
