import { interval, timer } from 'rxjs';

const startTimeStream = () => {
  const interval$ = interval(1000);
  const timer$ = timer(3000); // Delay

  interval$.subscribe((item) => console.log(`interval: ${item}`));
  timer$.subscribe((item) => console.log(`timer: ${item}`));
};

export default startTimeStream;
