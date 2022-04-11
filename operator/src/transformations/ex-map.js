import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const exMap = () => {
  const obs$ = of(1, 2, 3, 4, 5);
  obs$.pipe(map((x) => x * 2)).subscribe((x) => console.log(x));
};

export default exMap;
