import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

const exPluck = () => {
  const obs$ = from([
    { name: 'apple', price: 1200, info: { category: 'fruit' } },
    { name: 'carrot', price: 800, info: { category: 'vegetable' } },
    { name: 'pork', price: 5000, info: { category: 'meet' } },
    { name: 'milk', price: 2400, info: { category: 'drink' } },
  ]);
  obs$.pipe(pluck('info', 'category')).subscribe((x) => console.log(x));
};

export default exPluck;
