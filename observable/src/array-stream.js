import { from, generate, of, range } from 'rxjs';

const startArrayStream = () => {
  const of$ = of(1, 2, 3, 4, 5);
  const from$ = from([1, 2, 3, 4, 5]);
  const range$ = range(11, 5);
  // 이거는 For 문과 유사함
  const generate$ = generate({ initialState: 5, condition: (x) => x < 30, iterate: (x) => x + 2 });

  of$.subscribe((item) => console.log(`of: ${item}`));
  from$.subscribe((item) => console.log(`from: ${item}`));
  range$.subscribe((item) => console.log(`range: ${item}`));
  generate$.subscribe((item) => console.log(`generate: ${item}`));
};

export default startArrayStream;
