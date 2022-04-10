import { ajax } from 'rxjs/ajax';

const startAjax = () => {
  const ajax$ = ajax(`http://127.0.0.1:3000/people/1`);

  ajax$.subscribe((result) => console.log(`ajax: ${result.response}`));
};

export default startAjax;
