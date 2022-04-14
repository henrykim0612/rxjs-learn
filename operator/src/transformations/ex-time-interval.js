import { interval } from 'rxjs';
import { timeInterval } from 'rxjs/operators';

const exTimeInterval = () => {
  const obs$ = interval(1000);
  obs$.pipe(timeInterval()).subscribe({
    next: console.log,
    error: (err) => console.error(err),
    complete: () => console.log('Complete'),
  });
};

export default exTimeInterval;
