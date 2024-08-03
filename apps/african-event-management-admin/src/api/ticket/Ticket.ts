import { Attendee } from "../attendee/Attendee";
import { Transaction } from "../transaction/Transaction";

export type Ticket = {
  attendees?: Array<Attendee>;
  createdAt: Date;
  id: string;
  price: number | null;
  seat: string | null;
  status?: "Option1" | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
