import { AttendeeCreateNestedManyWithoutEventsInput } from "./AttendeeCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  attendees?: AttendeeCreateNestedManyWithoutEventsInput;
  category?: "Option1" | null;
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  name?: string | null;
};
