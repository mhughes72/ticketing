import { Subjects, Publisher, OrderCancelledEvent } from '@mantmonster/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
