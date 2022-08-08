import './style.css';

import { of, take, from, map, Observable } from 'rxjs';

const observable = new Observable((a) => {
  a.next(6);
  setTimeout(() => {
    // a.next(9);
    // a.complete();
  }, 1000);
});

observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
});

// Open the console in the bottom right to see results.

var a = [1, 5, 6];

const result = from(a);

result.subscribe((x) => console.log(x));

// of(a[2])
result.pipe(map((a) => a * a)).subscribe((v) => console.log(`value: ${v}`));

function* generateDoubles(seed) {
  let i = seed;
  while (true) {
    yield i;
    i = 2 * i; // double it
  }
}

const iterator = generateDoubles(2);
const result1 = from(iterator).pipe(take(10));

result1.subscribe((x) => console.log(x));
