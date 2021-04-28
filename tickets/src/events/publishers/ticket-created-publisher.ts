import { Publisher, Subjects, TicketCreatedEvent } from '@mantmonster/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
