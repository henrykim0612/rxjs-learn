import { interval } from 'rxjs';
import { map, take, timestamp } from 'rxjs/operators';

const exTimestamp = () => {
  const obs$ = interval(1000);
  obs$
    .pipe(
      take(10),
      timestamp(), // timestamp 가 포함된 객체로 리턴
      map((x) => {
        x.timestamp = new Date(x.timestamp).toString();
        return x;
      }),
    )
    .subscribe({
      next: console.log,
      error: (err) => console.error(err),
      complete: () => console.log('Complete'),
    });
};

export default exTimestamp;
