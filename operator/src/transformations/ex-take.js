import { range } from 'rxjs';
import { filter, take } from 'rxjs/operators';

const exTake = () => {
  const obs$ = range(1, 50);
  obs$
    .pipe(
      filter((x) => x % 2 === 0),
      take(5), // 필터링된 값 중에서 앞에서 5개 출력
    )
    .subscribe({
      next: console.log,
      error: (err) => console.error(err),
      complete: () => console.log('Complete'),
    });
};

export default exTake;
