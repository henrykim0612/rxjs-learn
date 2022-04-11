import { interval, takeUntil, timer } from 'rxjs';

const exTakeUntil = () => {
  const obs1$ = interval(1000);
  const obs2$ = timer(5000); // obs2$ 실행시 종료됨
  obs1$.pipe(takeUntil(obs2$)).subscribe({
    next: console.log,
    error: (err) => console.error(err),
    complete: () => console.log('Complete'),
  });
};

export default exTakeUntil;

/*로딩화면을 쭉 보여주다 Ajax 요청이 완료되면 처리하는 방식으로 응용 가능*/
// interval(50).pipe(
//   takeUntil(
//     ajax('http://127.0.0.1:3000/people/name/random').pipe(
//       pluck('response'),
//       tap(console.log)
//     )
//   )
// ).subscribe({
//   next: console.log,
//   error: (err) => console.error(err),
//   complete: () => console.log('Complete'),
// });
