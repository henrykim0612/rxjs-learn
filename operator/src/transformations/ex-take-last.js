import { range } from 'rxjs';
import { filter, takeLast } from 'rxjs/operators';

const exTakeLast = () => {
  const obs$ = range(1, 50);
  obs$
    .pipe(
      filter((x) => x % 2 === 0),
      takeLast(5), // 필터링된 값 중에서 뒤에서 5개 출력
    )
    .subscribe({
      next: console.log,
      error: (err) => console.error(err),
      complete: () => console.log('Complete'),
    });
};

export default exTakeLast;

/*이렇게 응용 가능*/
// interval(1000).pipe(
//   take(10),
//   takeLast(5)
// ).subscribe({
//   next: console.log,
//   error: (err) => console.error(err),
//   complete: () => console.log('Complete'),
// });
