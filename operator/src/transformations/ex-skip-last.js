import { range } from 'rxjs';
import { skipLast } from 'rxjs/operators';

const exSkipLast = () => {
  const obs$ = range(1, 50);
  obs$.pipe(skipLast(5)).subscribe({
    next: console.log,
    error: (err) => console.error(err),
    complete: () => console.log('Complete'),
  });
};

export default exSkipLast;
