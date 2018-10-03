class CustomIterable implements Iterable<string> {
  [Symbol.iterator]() {
    let nextInx = 0;
    const arr: string[] = ['first', 'second'];

    const iterator: Iterator<string> = {
      next() {
        return {
          value: arr[nextInx++],
          done: nextInx > arr.length,
        };
      },
    };
    return iterator;
  }
}

const cIterable = new CustomIterable();

for (const item of cIterable) {
  console.log(item);
}
