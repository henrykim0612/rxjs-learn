import { filter, map, range } from 'rxjs';

export default () => {
  /***************
   * Sample 1
   * 파이프라인에 연결
   ***************/
  const observable1$ = range(1, 10);
  const observer1 = {
    next: (x) => console.log(x),
    error: (err) => console.error(err),
    complete: () => console.log('Complete'),
  };
  observable1$
    .pipe(
      filter((x) => x % 2 === 0),
      map((x) => x * 2),
      map((x) => x + 10),
    )
    .subscribe(observer1);
};
