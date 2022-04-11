import { interval, skipUntil, timer } from 'rxjs';

const exSkipUntil = () => {
  const obs1$ = interval(1000);
  const obs2$ = timer(5000); // obs2$ 실행시 종료됨
  obs1$.pipe(skipUntil(obs2$)).subscribe({
    next: console.log,
    error: (err) => console.error(err),
    complete: () => console.log('Complete'),
  });
};

export default exSkipUntil;
