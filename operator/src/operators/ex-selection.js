import { distinct, elementAt, filter, first, from, last } from 'rxjs';

const exSelection = () => {
  const obs$ = from([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);

  obs$.pipe(first()).subscribe((x) => console.log(`first: ${x}`));
  obs$.pipe(last()).subscribe((x) => console.log(`last: ${x}`));
  obs$.pipe(elementAt(5)).subscribe((x) => console.log(`elementAt: ${x}`));
  obs$.pipe(distinct()).subscribe((x) => console.log(`distinct: ${x}`));
  obs$.pipe(filter((x) => x % 2 === 0)).subscribe((x) => console.log(`filter: ${x}`));
};

export default exSelection;
