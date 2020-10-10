import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { StringObserver } from './observer';

export function fct1(): void {

    var subject1 = new Subject<string>();

    var observer1 = new StringObserver("subject.fct1.observer1");
    var observer2 = new StringObserver("subject.fct1.observer2");

    subject1.subscribe(observer1);
    subject1.subscribe(observer2);

    stream(subject1);    
}

export function behavior(): void {

    var observer1 = new StringObserver("subject.behavior.observer1");
    var observer2 = new StringObserver("subject.behavior.observer2");
    
    var behavior = new BehaviorSubject<string>("stream0");    
    
    behavior.subscribe(observer1);
    behavior.next("stream1");
    behavior.next("stream2");

    behavior.subscribe(observer2);
    behavior.next("stream3");
}

export function replay(): void {

    var observer1 = new StringObserver("subject.behavior.observer1");
    var observer2 = new StringObserver("subject.behavior.observer2");

    var replay = new ReplaySubject<string>(2);

    replay.subscribe(observer1);
    replay.next("stream1");
    replay.next("stream2");

    replay.subscribe(observer2);
    replay.next("stream3");
}

export function asynch(): void {

    var observer1 = new StringObserver("subject.asynch.observer1");
    var observer2 = new StringObserver("subject.asynch.observer2");
    var observer3 = new StringObserver("subject.asynch.observer3");

    var asynch = new AsyncSubject();

    asynch.subscribe(observer1);
    asynch.next("stream1");
    asynch.next("stream2");
    asynch.complete();

    asynch.subscribe(observer2);
    asynch.subscribe(observer3);
}

/* private utility */

function stream(subject: Subject<string>) {
    subject.next("stream1");
    subject.next("stream2");
    subject.complete();
    subject.next("stream3");
}