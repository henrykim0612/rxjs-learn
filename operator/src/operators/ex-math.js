import { count, max, min, of, reduce } from 'rxjs';

const exMath = () => {
  const obs$ = of(1, 2, 3, 4, 5);
  obs$.pipe(count()).subscribe((x) => console.log(`Count: ${x}`));
  obs$.pipe(max()).subscribe((x) => console.log(`Max: ${x}`));
  obs$.pipe(min()).subscribe((x) => console.log(`Min: ${x}`));
  obs$.pipe(reduce((acc, v) => acc + v, 0)).subscribe((x) => console.log(`Reduce: ${x}`));
};

export default exMath;
