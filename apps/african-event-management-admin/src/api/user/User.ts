import { Attendee } from "../attendee/Attendee";
import { JsonValue } from "type-fest";
import { Transaction } from "../transaction/Transaction";

export type User = {
  attendees?: Array<Attendee>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
};
