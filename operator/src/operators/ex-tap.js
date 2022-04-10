import { from } from 'rxjs';
import { distinct, filter, tap } from 'rxjs/operators';

const exTap = () => {
  from([9, 3, 10, 5, 1, 10, 9, 9, 1, 4, 1, 8, 6, 2, 7, 2, 5, 5, 10, 2])
    .pipe(
      tap((x) => console.log('-------------- 처음 탭: ' + x)),
      filter((x) => x % 2 === 0),
      tap((x) => console.log('--------- 필터 후: ' + x)),
      distinct(),
      tap((x) => console.log('중복 제거 후: ' + x)),
    )
    .subscribe((x) => console.log('발행물: ' + x));
};

export default exTap;
