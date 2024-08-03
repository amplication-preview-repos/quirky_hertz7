import { AttendeeListRelationFilter } from "../attendee/AttendeeListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  attendees?: AttendeeListRelationFilter;
  category?: "Option1";
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
