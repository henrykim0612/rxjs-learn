import { range, toArray } from 'rxjs';
import { filter } from 'rxjs/operators';

const exToArray = () => {
  const obs$ = range(1, 10);
  obs$
    .pipe(
      filter((x) => x % 3 === 0),
      filter((x) => x % 2 === 1),
      toArray(), // 배열로 만들어서 한번에 반환
    )
    .subscribe(console.log);
};

export default exToArray;
