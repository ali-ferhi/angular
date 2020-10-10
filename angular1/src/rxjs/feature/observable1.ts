import { Observable, Subscriber } from "rxjs";

export function subscribeStringGenerator(subscriber: Subscriber<string>): void {
    subscriber.next("stream1");
    subscriber.next("stream2");
    subscriber.complete();
}