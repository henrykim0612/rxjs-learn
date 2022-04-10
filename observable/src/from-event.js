import { fromEvent } from 'rxjs';

// 특정 Element 의 Click, keypress 이벤트 발생시 Catch
const startFromEvent = () => {
  const obs1$ = fromEvent(document, 'click');
  const obs2$ = fromEvent(document.getElementById('myInput'), 'keypress');

  obs1$.subscribe((item) => console.log(item));
  obs2$.subscribe((item) => console.log(item));
};

export default startFromEvent;
