import { Attendee } from "../attendee/Attendee";

export type Event = {
  attendees?: Array<Attendee>;
  category?: "Option1" | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
