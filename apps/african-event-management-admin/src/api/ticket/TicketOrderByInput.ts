import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  seat?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
