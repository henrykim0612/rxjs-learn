import { Observable } from 'rxjs';

const startCustomObservable = () => {
  const obs$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    let i = 5;
    setInterval(() => subscriber.next(i++), 1000);
    // Interval 사용으로 complete 주석됨(계속 흘러가는 스트림이기 때문)
    // subscriber.complete();
  });

  obs$.subscribe((item) => console.log(`${item}`));
};

export default startCustomObservable;
