import { range } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

const exSkipWhile = () => {
  const obs$ = range(1, 50);
  obs$.pipe(skipWhile((x) => x <= 40)).subscribe({
    next: console.log,
    error: (err) => console.error(err),
    complete: () => console.log('Complete'),
  });
};

export default exSkipWhile;
