import { Publisher, Subjects, TicketUpdatedEvent } from '@mantmonster/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
