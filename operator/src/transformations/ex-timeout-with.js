import { interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, timeoutWith } from 'rxjs/operators';

const exTimeoutWith = () => {
  const obs$ = ajax('http://127.0.0.1:3000/people/name/random');
  obs$
    .pipe(
      pluck('response'),
      timeoutWith(3000, interval(1000)), // 3초가 지나가면 두번째 인자의 Observable 실행
    )
    .subscribe({
      next: console.log,
      error: (err) => console.error(err),
      complete: () => console.log('Complete'),
    });
};

export default exTimeoutWith;
