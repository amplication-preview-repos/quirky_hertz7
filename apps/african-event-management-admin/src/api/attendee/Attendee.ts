import { Event } from "../event/Event";
import { Ticket } from "../ticket/Ticket";
import { User } from "../user/User";

export type Attendee = {
  createdAt: Date;
  event?: Event | null;
  id: string;
  ticket?: Ticket | null;
  updatedAt: Date;
  user?: User | null;
};
