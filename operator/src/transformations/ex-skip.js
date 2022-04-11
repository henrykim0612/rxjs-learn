import { range } from 'rxjs';
import { skip } from 'rxjs/operators';

const exSkip = () => {
  const obs$ = range(1, 50);
  obs$.pipe(skip(5)).subscribe({
    next: console.log,
    error: (err) => console.error(err),
    complete: () => console.log('Complete'),
  });
};

export default exSkip;
