import { interval } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';

const exDelay = () => {
  const obs$ = interval(1000);
  obs$
    .pipe(
      take(5),
      tap((x) => console.log(`Tap: ${x}`)),
      delay(1500),
    )
    .subscribe({
      next: console.log,
      error: (err) => console.error(err),
      complete: () => console.log('Complete'),
    });
};

export default exDelay;
