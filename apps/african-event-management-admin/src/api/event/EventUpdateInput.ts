import { AttendeeUpdateManyWithoutEventsInput } from "./AttendeeUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  attendees?: AttendeeUpdateManyWithoutEventsInput;
  category?: "Option1" | null;
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  name?: string | null;
};
