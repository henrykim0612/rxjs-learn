import { from, interval, Observable } from 'rxjs';

/***********
 * Sample 1
 ***********/
const sample1$ = from([1, 2, 3, 4, 5]);
const observer = {
  next: console.log,
  error: (err) => console.error('발행중 오류', err),
  complete: () => console.log('발행문 완결'),
};
sample1$.subscribe(observer);

/*******************************
 * Sample 2
 * 중간에 에러가 발생하면 발행이 중단된다
 ********************************/
const sample2$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  null[0];
  subscriber.next(4);
  subscriber.complete();
});
sample2$.subscribe({
  next: console.log,
  error: (err) => console.error(`에러발생`, err),
  complete: () => console.log('Complete'),
});

/*******************************
 * Sample 3
 * 중간에 에러가 발생하면 발행이 중단된다
 ********************************/
const sample3$ = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);
  subscriber.complete();
  // 실행되지 않는다.
  subscriber.next(5);
});
sample3$.subscribe({
  next: console.log,
  error: (err) => console.error(`에러발생`, err),
  complete: () => console.log('Complete'),
});

/***************
 * Sample 4
 * 구독을 변수에 지정
 ***************/
const sample4$ = interval(1000);
// 변수에 지정하면 구독이 시작되고 있음
const subscription = sample4$.subscribe(console.log);
setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
setTimeout(() => {
  // 구독을 종료하고 다시 실행하면 처음부터 다시 시작됨
  sample4$.subscribe(console.log);
}, 7000);
