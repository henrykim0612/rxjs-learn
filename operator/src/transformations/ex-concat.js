import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const exConcat = () => {
  const intv1$ = interval(1000).pipe(
    map(() => 'INTERVAL 1'),
    take(3),
  );
  const intv2$ = interval(1000).pipe(
    map(() => 'INTERVAL 2'),
    take(3),
  );
  const intv3$ = interval(1000).pipe(
    map(() => 'INTERVAL 3'),
    take(3),
  );

  concat(intv1$, intv2$, intv3$).subscribe(console.log);
};

export default exConcat;
