import { range } from 'rxjs';
import { scan } from 'rxjs/operators';

const exScan = () => {
  const obs$ = range(1, 10);
  obs$.pipe(scan((acc, x) => acc + x)).subscribe(console.log); // reduce 와는 다르게 누적 되어가는 값을 반환
};

export default exScan;
