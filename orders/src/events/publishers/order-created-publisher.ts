import { Publisher, OrderCreatedEvent, Subjects } from '@mantmonster/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
