import { SortOrder } from "../../util/SortOrder";

export type AttendeeOrderByInput = {
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  ticketId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
