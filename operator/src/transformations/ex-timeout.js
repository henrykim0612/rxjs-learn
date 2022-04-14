import { ajax } from 'rxjs/ajax';
import { pluck, timeout } from 'rxjs/operators';

const exTimeout = () => {
  const obs$ = ajax('http://127.0.0.1:3000/people/name/random');
  obs$
    .pipe(
      pluck('response'),
      timeout(3000), // 3초반에 Response 가 오지 않으면 에러로 던짐
    )
    .subscribe({
      next: console.log,
      error: (err) => console.error(err),
      complete: () => console.log('Complete'),
    });
};

export default exTimeout;
