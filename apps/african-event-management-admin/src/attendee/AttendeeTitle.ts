import { Attendee as TAttendee } from "../api/attendee/Attendee";

export const ATTENDEE_TITLE_FIELD = "id";

export const AttendeeTitle = (record: TAttendee): string => {
  return record.id?.toString() || String(record.id);
};
