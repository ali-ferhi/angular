import { of, Observable, Observer } from 'rxjs';
import { StringObserver } from './observer';
import { subscribeStringGenerator } from './observable1';

export function basic1(): void {

  var observable: Observable<number> = of<number>(42, 43);

  observable.subscribe(
    (value) => {
      console.log("observer.value = " + value);
    },
    (error) => {
      console.log("observer.error = " + error);
    },
    () => {
      console.log("observer.complete");
  });
}

export function  basic2(): void {
    
  var observer = new StringObserver("obs.app1.basic2");
  var observer2 = new StringObserver("obs.app1.basic2.observer2");

  var observable: Observable<string> = of<string>("stream1", "stream2");

  observable.subscribe(observer);
  observable.subscribe(observer2);
}

export function basic3(): void {

  var observable = new Observable<string>(subscribeStringGenerator);
  //var observable : Observable<number> = Observable.create(this.subscribe);
  
  var observer = new StringObserver("obs.app1.basic3");

  observable.subscribe(observer);

}
  