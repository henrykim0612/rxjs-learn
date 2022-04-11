import { from } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const exTakeWhile = () => {
  const obs$ = from([1, 2, 10, 11, 2, 5, 20, 10]);
  obs$
    .pipe(
      takeWhile((x) => x <= 10), // 10 보다 작은 동안에만 반복해서 실행
    )
    .subscribe({
      next: console.log,
      error: (err) => console.error(err),
      complete: () => console.log('Complete'),
    });
};

export default exTakeWhile;
