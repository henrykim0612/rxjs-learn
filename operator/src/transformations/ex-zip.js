import { from, zip } from 'rxjs';

const exZip = () => {
  const obs1$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const obs2$ = from(['a', 'b', 'c', 'd', 'e']);
  // const obs3$ = from([true, false, 'F', [6, 7, 8], { name: 'zip' }]);

  // 가장 작은 배열의 수 만큼만 반환함
  zip(obs1$, obs2$).subscribe(console.log);
};

export default exZip;
