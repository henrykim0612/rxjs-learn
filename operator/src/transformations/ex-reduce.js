import { range } from 'rxjs';
import { reduce } from 'rxjs/operators';

const exReduce = () => {
  const obs$ = range(1, 10);
  obs$.pipe(reduce((acc, x) => acc + x)).subscribe(console.log); // 최종적으로 누적된 값만 반환
};

export default exReduce;
