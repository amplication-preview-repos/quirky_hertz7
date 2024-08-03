import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
