import { AsyncSubject, BehaviorSubject, interval, ReplaySubject, Subject } from 'rxjs';

/***********
 * Sample 1
 ***********/
const subject1 = new Subject();
subject1.subscribe(console.log);
// 개발자가 원하는 때에 발행
// 모든 구독자에게 똑같이 발행
subject1.next(1);
subject1.next(3);
subject1.next(5);

/**********
 * Sample 2
 **********/
const subject2 = new Subject();
setTimeout(() => {
  let x = 0;
  setInterval(() => {
    subject2.next(x++);
  }, 2000);
}, 5000);
// 시점에 상관없이 동일한 값을 받는다
subject2.subscribe((x) => console.log('바로구독: ' + x));
setTimeout(() => {
  subject2.subscribe((x) => console.log('3초 후 구독: ' + x));
}, 3000);
setTimeout(() => {
  subject2.subscribe((x) => console.log('10초 후 구독: ' + x));
}, 10000);
setTimeout(() => {
  subject2.subscribe((x) => console.log('14초 후 구독: ' + x));
}, 14000);

/************************
 * Sample 3
 * Observable + Subject
 ************************/
const subject3 = new Subject();
const obs$ = interval(1000);

obs$.subscribe(subject3);
// 위 코드와 아래 코드는 같은 의미
// obs$.subscribe((x) => {
//   subject3.next(x);
// });

subject3.subscribe((x) => console.log('바로구독: ' + x));
setTimeout(() => {
  subject3.subscribe((x) => console.log('3초 후 구독: ' + x));
}, 3000);
setTimeout(() => {
  subject3.subscribe((x) => console.log('5초 후 구독: ' + x));
}, 5000);
setTimeout(() => {
  subject3.subscribe((x) => console.log('10초 후 구독: ' + x));
}, 10000);

/*********************************
 * BehaviorSubject
 * 마지막 값을 저장 후 추가 구독자에게 발행
 *********************************/
const subject4 = new BehaviorSubject(0); // 초기값 있음
subject4.subscribe((x) => {
  console.log(`A: ${x}`);
});

subject4.next(1);
subject4.next(2);
subject4.next(3);

subject4.subscribe((x) => {
  console.log(`B: ${x}`);
});

subject4.next(4);
subject4.next(5);

// 아래와 같이 서브젝트가 마지막으로 발행한 값을 얻을 수 있습니다.
const lastValue = subject4.getValue();
console.log(`Lase value: ${lastValue}`);

/*************************************
 * ReplaySubject
 * 마지막 N개 값을 저장 후 추가 구독자에게 발행
 *************************************/
const subject5 = new ReplaySubject(3); // 마지막 3개 값
subject5.subscribe((x) => console.log(`A: ${x}`));
subject5.next(1);
subject5.next(2);
subject5.next(3);
subject5.next(4);
subject5.next(5);

subject5.subscribe((x) => console.log(`B: ${x}`));
subject5.next(6);
subject5.next(7);

/***************************
 * AsyncSubject
 * Complete 후의 마지막 값만 발행
 ***************************/
const subject6 = new AsyncSubject();
subject6.subscribe((x) => console.log(`A: ${x}`));
subject6.next(1);
subject6.next(2);
subject6.next(3);

subject6.subscribe((x) => console.log(`B: ${x}`));
subject6.next(4);
subject6.next(5);
subject6.next(6);

subject6.subscribe((x) => console.log(`C: ${x}`));
subject6.next(7);
subject6.next(8); // 이 값만 출력됨
subject6.complete();
