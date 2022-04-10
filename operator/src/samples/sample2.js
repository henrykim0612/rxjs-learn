import { filter, interval, map, tap } from 'rxjs';

export default () => {
  /****************
   * Sample 2
   * 시간에 의한 발행물
   ****************/
  const observable2$ = interval(1000);
  observable2$
    .pipe(
      filter((x) => x % 2 === 0),
      tap(console.log), // tap 은 확인용으로 사용가능. 실제 발행 값으로는 전달되지 않음.
      map((x) => x * 2),
    )
    .subscribe((x) => console.log(`발행: ${x}`));
};
