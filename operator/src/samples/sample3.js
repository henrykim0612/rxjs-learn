import { fromEvent, map } from 'rxjs';

export default () => {
  /*****************
   * Sample 3
   * 이벤트에 의한 발행물
   *****************/
  const observable3$ = fromEvent(document, 'click');
  observable3$.pipe(map((e) => e.x + ' ' + e.y)).subscribe((x) => console.log(`발행: ${x}`));
};
