import { Ticket as TTicket } from "../api/ticket/Ticket";

export const TICKET_TITLE_FIELD = "seat";

export const TicketTitle = (record: TTicket): string => {
  return record.seat?.toString() || String(record.id);
};
